// import { useState } from 'react';
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Landing = lazy(() => import("./pages/HomePage"));
const Header = lazy(() => import("./components/header/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Copy = lazy(() => import("./components/footer/CopyRight"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense>
          <div className="position-sticky sticky-top z-5 w-100 header-shadow">
            <Header />
          </div>
        </Suspense>

        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
