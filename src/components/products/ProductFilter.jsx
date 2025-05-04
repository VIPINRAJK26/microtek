import React, { useEffect, useState } from "react";
import { Accordion, Form } from "react-bootstrap";

const ProductFilter = ({ onDataChange, initialProducts = [] }) => {
  const [filters, setFilters] = useState({
    variant: [],
    sku: [],
    price: 0,
    old_price: 0,
    weight: [],
    voltage: [],
    dimensions: [],
    max_price: 25000,
  });

  const [options, setOptions] = useState({
    sku: [],
    voltage: [],
    weight: [],
    dimensions: [],
  });

  const getUnit = (key) => {
    switch (key) {
      case "voltage": return "V";
      case "weight": return "kg";
      case "price":
      case "old_price":
      case "max_price": return "₹";
      case "dimensions": return "L x W x H";
      default: return "";
    }
  };

  // Build filter options from initial products
  useEffect(() => {
    if (initialProducts.length > 0) {
      const getUnique = (arr, key) => [
        ...new Set(arr.flatMap(item => 
          Array.isArray(item[key]) ? item[key] : [item[key]]
        ).filter(Boolean))
      ];
      
      setOptions({
        sku: getUnique(initialProducts, "sku"),
        voltage: getUnique(initialProducts, "voltage"),
        weight: getUnique(initialProducts, "weight"),
        dimensions: getUnique(initialProducts, "dimensions"),
      });
    }
  }, [initialProducts]);

  // Apply filters locally when they change
  useEffect(() => {
    if (!initialProducts.length) return;

    const filtered = initialProducts.filter(product => {
      // Check price filter
      if (product.price > filters.max_price) return false;
      
      // Check other filters
      for (const [key, filterValues] of Object.entries(filters)) {
        if (key === 'max_price') continue;
        
        if (filterValues.length > 0) {
          const productValue = product[key];
          if (Array.isArray(productValue)) {
            if (!productValue.some(v => filterValues.includes(v))) return false;
          } else {
            if (!filterValues.includes(productValue)) return false;
          }
        }
      }
      
      return true;
    });

    onDataChange(filtered);
  }, [filters, initialProducts]);

  const handleCheckboxChange = (key, value) => {
    setFilters(prev => {
      const current = new Set(prev[key]);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, [key]: [...current] };
    });
  };

  const handlePriceChange = (e) => {
    const price = parseInt(e.target.value, 10);
    setFilters(prev => ({ ...prev, max_price: price }));
  };

  return (
    <div className="filter-container">
      <h5>Filters</h5>
      <Accordion alwaysOpen={true} defaultActiveKey={"0"}>
        {Object.entries(options).map(([key, values], idx) => (
          <Accordion.Item key={key} eventKey={String(idx)}>
            <Accordion.Header>
              {key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </Accordion.Header>
            <Accordion.Body>
              {values.map((item, i) => (
                <Form.Check
                  key={i}
                  type="checkbox"
                  label={`${item} ${getUnit(key)}`}
                  onChange={() => handleCheckboxChange(key, item)}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}

        <Accordion.Item eventKey="price">
          <Accordion.Header>Max Price</Accordion.Header>
          <Accordion.Body>
            <Form.Label>Up to ₹{filters.max_price}</Form.Label>
            <Form.Range
              min={1000}
              max={25000}
              value={filters.max_price}
              onChange={handlePriceChange}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductFilter;