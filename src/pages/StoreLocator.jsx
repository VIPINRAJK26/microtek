import React, { Component } from "react";
import "./StoreLocator.css";
import SearchBar from "../components/storelocator/SearchBar";

const StoreLocator = () => {
  return (
    <div className="d-md-flex py-md-5 py-3 container  ">
      <div className="locator-img col-md-4 col-12 text-center">
        <img src="/store_locator.png" alt="" />
      </div>
      <div className="search-location text-center pt-4 col-md-8 col-12 ">
        <div className="location-head text-center pb-3">
          <h1>Store Locator</h1>
          <p>Locate out nearest store and experience our Products first hand</p>
          <div className="text-center pt-4 ">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
