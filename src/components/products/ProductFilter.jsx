import { useEffect, useState } from "react";
import { Accordion,Form } from "react-bootstrap";
import axiosInstance from "../../api/axios";

const ProductFilter = ({ initialProducts = [], onDataChange, selectedVariant,selectedCategory }) => {
  const [options, setOptions] = useState({});
  const [allowedFilters, setAllowedFilters] = useState([]);
  const [filters, setFilters] = useState({});
  const [subcategory, setSubcategory] = useState("");

  console.log(initialProducts, "products initial");
  console.log(allowedFilters, 'allowed filters');
  console.log(options, "options");
  console.log(selectedVariant, "selected variant");
  console.log(selectedCategory, "selected category");


  // 🟡 Extract subcategory from first product
  useEffect(() => {
    if (initialProducts.length > 0 && initialProducts[0].subcategory) {
      setSubcategory(initialProducts[0].subcategory.toLowerCase());
    }
  }, [initialProducts]);

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
      let filteredProducts = initialProducts;

      // Filter by category for 'variant' specifically
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
    });

    console.log("🧪 Final options:", newOptions);
    setOptions(newOptions);
  }, [initialProducts, allowedFilters, selectedCategory]);
  
  
  
  
  

  // 🟣 Handle filter change
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

      // 🔵 Apply filters to products
      const filtered = initialProducts.filter((product) => {
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
            <Accordion.Header className="text-capitalize">
              {key.replace(/_/g, " ")}
            </Accordion.Header>
            <Accordion.Body>
              {values.map((val) => (
                <Form.Check
                  key={val}
                  type="checkbox"
                  id={`${key}-${val}`}
                  label={val}
                  value={val}
                  className="custom-checkbox mb-2"
                  onChange={(e) => handleFilterChange(e, key)}
                  checked={filters[key]?.includes(val.toString()) || false}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductFilter;
