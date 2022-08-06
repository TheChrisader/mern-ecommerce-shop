import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Home />} />
            <Route path="/product/:slug" element={<Home />} />
            <Route path="/user/:id" element={<Home />} />
            <Route path="/product/:slug/edit" element={<Home />} />
            <Route path="/user/:id/edit" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/settings" element={<Home />} />
            <Route path="/profile" element={<Home />} />
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
