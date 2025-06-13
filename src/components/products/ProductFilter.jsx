import { useEffect, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import axiosInstance from "../../api/axios";
import { useMemo } from "react";

const ProductFilter = ({
  initialProducts = [],
  onDataChange,
  selectedVariant,
  selectedCategory,
  uniqueVariants,
  previewDetails,
  products,
  subCategory,
}) => {
  const [options, setOptions] = useState({});
  const [allowedFilters, setAllowedFilters] = useState([]);
  const [filters, setFilters] = useState({});
  // const [subcategory, setSubcategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [selectedPrice, setSelectedPrice] = useState([0, 0]);

  console.log("Initial products:", initialProducts);
  console.log(products, "products in filter component");
  console.log(subCategory, "subCategory in filter component");
  console.log(allowedFilters, "allowedFilters in filter component");
  console.log(selectedCategory, "selectedCategory in filter component");
  

 

  const UNITS = {
    va_rating: "VA",
    voltage: "V",
    wattage: "W",
    price: "₹",
    Ah_rating: "Ah",
    panel_capacity: "W",
    warranty: "Years",
  };

  const filteredBaseProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.subcategory?.toLowerCase() === subCategory?.toLowerCase() &&
        product.category?.toLowerCase() === selectedCategory?.toLowerCase()
    );
  }, [products, subCategory, selectedCategory]);
  

  console.log("Filtered base products:", filteredBaseProducts);
  

  useEffect(() => {
    if (filteredBaseProducts.length > 0) {
      const prices = filteredBaseProducts.map((p) => p.price).filter(Boolean);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
      setSelectedPrice([min, max]);
    }
  }, [filteredBaseProducts]);
  

  useEffect(() => {
    const fetchFilters = async () => {
      if (!subCategory) return;

      try {
        const response = await axiosInstance.get(`filters/${subCategory}/`);
        setAllowedFilters(response.data.filters || []);
      } catch (error) {
        console.error("Failed to fetch filters:", error);
      }
    };

    fetchFilters();
  }, [subCategory]);

  useEffect(() => {
    if (!filteredBaseProducts.length || !allowedFilters.length) return;

    const newOptions = {};

    allowedFilters.forEach((key) => {
      if (key === "variant") {
        const variantValues = [
          ...new Set(
            filteredBaseProducts
              .map((product) => product.variant)
              .filter(Boolean)
              .map((val) => val.toString())
          ),
        ];

        if (variantValues.length) {
          newOptions[key] = variantValues;
        }
      } else {
        const uniqueValues = [
          ...new Set(
            filteredBaseProducts
              .map((product) => product[key])
              .filter(Boolean)
              .map((val) => val.toString())
          ),
        ];

        if (uniqueValues.length) {
          newOptions[key] = uniqueValues;
        }
      }
    });

    setOptions(newOptions);
  }, [filteredBaseProducts, allowedFilters, selectedCategory]);
  

  // 🟢 Preselect the current variant if available
  useEffect(() => {
    if (options.variant && selectedVariant) {
      setFilters((prevFilters) => {
        if (
          !prevFilters.variant ||
          !prevFilters.variant.includes(selectedVariant.toString())
        ) {
          return {
            ...prevFilters,
            variant: [selectedVariant.toString()],
          };
        }
        return prevFilters;
      });
    }
  }, [options.variant, selectedVariant]);

  // 🟢 Apply filters whenever filters state changes
  useEffect(() => {
    const filtered = filteredBaseProducts.filter((product) => {
      return Object.entries(filters).every(([filterKey, filterValues]) => {
        const productValue = product[filterKey];
        if (!filterValues.length) return true;

        if (Array.isArray(productValue)) {
          return productValue.some((val) =>
            filterValues.includes(val.toString())
          );
        }

        return filterValues.includes(productValue?.toString());
      });
    });

    onDataChange(filtered);
  }, [filters, filteredBaseProducts]);
  
  

  const handleFilterChange = (event, key) => {
    const value = event.target.value.toString();
    const checked = event.target.checked;

    setFilters((prev) => {
      const prevValues = prev[key] || [];
      const updatedValues = checked
        ? [...prevValues, value]
        : prevValues.filter((v) => v !== value);

      const newFilters = {
        ...prev,
        [key]: updatedValues,
      };

      // Remove key entirely if no values selected
      if (updatedValues.length === 0) {
        delete newFilters[key];
      }

      return newFilters;
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
                    step={100}
                    value={selectedPrice[1]}
                    onChange={(e) => {
                      const newMax = parseInt(e.target.value);
                      setSelectedPrice([priceRange[0], newMax]);

                      const filtered = filteredBaseProducts
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





