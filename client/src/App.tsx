import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import ProductsPage from "./pages/Products/ProductsPage";
import Single from "./pages/Single/Single";
import Settings from "./pages/Settings/Settings";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/product/:slug" element={<Single />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <main
                  style={{ padding: "1rem", margin: "auto", height: "30vh" }}
                >
                  There's nothing here
                </main>
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
