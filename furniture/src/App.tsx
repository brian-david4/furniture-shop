import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductPage from "./Components/ProductPage/ProductPage";
import CartProvider from "./Data/CartContext";

function App() {
  const location = useLocation();

  return (
    <>
      <CartProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:productName" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
