import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ReturnRefundPolicy from "./pages/Refund";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";
import ContactSection from "./pages/Support&Contact";
import ScrollToTop from "./components/header/Scrolltotop";
import BuyNow from "./pages/BuyNow";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Landing = lazy(() => import("./pages/HomePage"));
const Header = lazy(() => import("./components/header/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Copy = lazy(() => import("./components/footer/CopyRight"));
const Products = lazy(() => import("./pages/ProductPage"));
const Single = lazy(() => import("./pages/SingleProduct"));
const Store = lazy(() => import("./pages/StoreLocator"));
const Preview = lazy(() => import("./pages/ProductPreview"));
const BatteryInverter = lazy(() => import("./pages/LiBatInverter"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense>
          <div className="position-sticky sticky-top z-5 w-100 header-shadow">
            <Header />
          </div>
        </Suspense>
        <ScrollToTop />

        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/products/:category/:variant"
                element={<Products />}
              />
              <Route path="/single/:id" element={<Single />} />
              <Route path="/store" element={<Store />} />
              <Route path="/preview/:category/:subcategory" element={<Preview />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<ReturnRefundPolicy />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/buy/:id" element={<BuyNow />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/bat-inv" element={<BatteryInverter />} />
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
