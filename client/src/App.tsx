import { useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import ProductsPage from "./pages/Products/ProductsPage";
import Single from "./pages/Single/Single";
import Settings from "./pages/Settings/Settings";
import Cart from "./pages/Cart/Cart";
import Edit from "./pages/Edit/Edit";
import Saved from "./pages/Saved/Saved";
import EventBus from "./utils/services/EventBus";
import { signOut } from "./redux/ApiCalls";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    signOut(dispatch);
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout", () => {
        logOut();
      });
    };
  }, [logOut]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id">
              <Route index element={<User />} />
              {/* <Route path="edit" element={<Edit />} /> */}
              <Route path="saved" element={<Saved />} />
            </Route>
            <Route path="/products" element={<ProductsPage />}>
              <Route path=":category" element={<ProductsPage />} />
            </Route>
            <Route path="/product/:slug" element={<Single />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
            <Route path="/cart/:id" element={<Cart />} />
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
