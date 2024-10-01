import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBar.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle change in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };

  return (
    <InputGroup className="mb-3 d-flex justify-content-center">
      <FormControl
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search rounded-5 ps-3"
      />
      <Button variant="primary" className="locator-btn rounded-5 ms-4 btn-lg fs-3" onClick={handleSearchClick}>
        <p className="fs-6 ">Search</p>
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
