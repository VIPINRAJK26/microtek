import { useEffect, useState } from "react";
import { Accordion,Form } from "react-bootstrap";
import axiosInstance from "../../api/axios";

const ProductFilter = ({
  initialProducts = [],
  onDataChange,
  selectedVariant,
  selectedCategory,
  uniqueVariants,
  previewDetails,
}) => {
  const [options, setOptions] = useState({});
  const [allowedFilters, setAllowedFilters] = useState([]);
  const [filters, setFilters] = useState({});
  const [subcategory, setSubcategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [selectedPrice, setSelectedPrice] = useState([0, 0]);

  console.log(initialProducts, "products initial");
  console.log(allowedFilters, "allowed filters");
  console.log(options, "options");
  console.log(selectedVariant, "selected variant");
  console.log(selectedCategory, "selected category");
  console.log(previewDetails, "preview details------------------");

  const UNITS = {
    va_rating: "VA",
    voltage: "V",
    wattage: "W",
    price: "₹",
    Ah_rating: "Ah",
    panel_capacity: "W",
    warranty: "Years",
  };

  

  useEffect(() => {
    if (initialProducts.length > 0) {
      const prices = initialProducts.map((p) => p.price).filter(Boolean);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
      setSelectedPrice([min, max]);
    }
  }, [initialProducts]);
  

  useEffect(() => {
    // Try to set subcategory from previewDetails (more stable)
    if (selectedCategory && selectedVariant && previewDetails?.length) {
      const match = previewDetails.find(
        (item) =>
          item.category === selectedCategory &&
          item.variant_name === selectedVariant
      );
      if (match?.subcategory) {
        setSubcategory(match.subcategory.toLowerCase());
      }
    }

    // OR fallback to first product's subcategory
    if (initialProducts.length && initialProducts[0].subcategory) {
      setSubcategory(initialProducts[0].subcategory.toLowerCase());
    }
  }, [selectedCategory, selectedVariant, previewDetails, initialProducts]);
  
  
  

  // 🟢 Fetch allowed filters based on subcategory
  useEffect(() => {
    const fetchFilters = async () => {
      if (!subcategory) return;

      try {
        const response = await axiosInstance.get(`filters/${subcategory}/`);
        setAllowedFilters(response.data.filters || []);
      } catch (error) {
        console.error("Failed to fetch filters:", error);
      }
    };

    fetchFilters();
  }, [subcategory]);

  // 🟠 Build filter options based on allowed filters
  // 🔵 Extract available options from products based on allowed filters
  useEffect(() => {
    if (!initialProducts.length || !allowedFilters.length) return;

    const newOptions = {};

    allowedFilters.forEach((key) => {
      // For variant, inject uniqueVariants passed from parent instead of building from products
      if (key === "variant" && uniqueVariants && uniqueVariants.length) {
        newOptions[key] = uniqueVariants;
      } else {
        let filteredProducts = initialProducts;

        // Optionally filter products by category for other keys if needed
        if (key === "variant" && selectedCategory) {
          filteredProducts = initialProducts.filter(
            (product) => product.category === selectedCategory
          );
          console.log(
            `🔍 Filtering products for category "${selectedCategory}":`,
            filteredProducts
          );
        }

        // Collect unique values
        const uniqueValues = [
          ...new Set(
            filteredProducts
              .map((product) => product[key])
              .filter(Boolean)
              .map((val) => val.toString())
          ),
        ];

        console.log(`✅ Filter key: ${key}, Values:`, uniqueValues);

        if (uniqueValues.length) {
          newOptions[key] = uniqueValues;
        }
      }
    });
    

    console.log("🧪 Final options:", newOptions);
    setOptions(newOptions);
  }, [initialProducts, allowedFilters, selectedCategory]);

  const handleFilterChange = (event, key) => {
    const value = event.target.value.toString();
    const checked = event.target.checked;

    setFilters((prev) => {
      const prevValues = prev[key] || [];
      const updatedValues = checked
        ? [...prevValues, value]
        : prevValues.filter((v) => v !== value);

      const updatedFilters = {
        ...prev,
        [key]: updatedValues,
      };

      const filtered = initialProducts
        .filter((product) => product.category === selectedCategory)
        .filter((product) => {
          return Object.entries(updatedFilters).every(
            ([filterKey, filterValues]) => {
              const productValue = product[filterKey];
              if (Array.isArray(productValue)) {
                return productValue.some((val) =>
                  filterValues.includes(val.toString())
                );
              }
              return filterValues.includes(productValue?.toString());
            }
          );
        });


      onDataChange(filtered); // Send filtered list back to parent

      return updatedFilters;
    });
  };

  return (
    <div className="filter-box shadow-sm p-3 rounded bg-white">
      <h5 className="filter-heading text-black px-3 py-2 rounded-top">
        🔍 Filter By
      </h5>

      <Accordion defaultActiveKey="0" alwaysOpen>
        {Object.entries(options).map(([key, values], idx) => (
          <Accordion.Item
            eventKey={idx.toString()}
            key={key}
            className="border-0"
          >
            <Accordion.Header>
              {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Accordion.Header>

            <Accordion.Body>
              {key === "price" ? (
                <div className="px-2">
                  <Form.Range
                    min={priceRange[0]}
                    max={priceRange[1]}
                    step={100} // or any step value
                    value={selectedPrice[1]}
                    onChange={(e) => {
                      const newMax = parseInt(e.target.value);
                      setSelectedPrice([priceRange[0], newMax]);

                      // Apply filter
                      const filtered = initialProducts
                        .filter(
                          (product) => product.category === selectedCategory
                        )
                        .filter(
                          (product) =>
                            product.price >= priceRange[0] &&
                            product.price <= newMax
                        );

                      onDataChange(filtered);
                    }}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{selectedPrice[1]}</span>
                  </div>
                </div>
              ) : (
                values.map((val) => (
                  <Form.Check
                    key={val}
                    type="checkbox"
                    id={`${key}-${val}`}
                    label={UNITS[key] ? `${val} ${UNITS[key]}` : val}
                    value={val}
                    className="custom-checkbox text-uppercase mb-2"
                    onChange={(e) => handleFilterChange(e, key)}
                    checked={filters[key]?.includes(val.toString()) || false}
                  />
                ))
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductFilter;
