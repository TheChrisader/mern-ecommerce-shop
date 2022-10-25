import "./App.scss";

import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Login from "./pages/Login/Login";
import EventBus from "./utils/services/EventBus";
import { signOut } from "./redux/apiCalls/userApiCalls";
import useMediaQuery from "./utils/hooks/useMediaQuery";

function App() {
  const shouldSidebarShow = useMediaQuery("(max-width: 1200px)");
  const [isClosed, setIsClosed] = useState(shouldSidebarShow);

  useEffect(() => {
    setIsClosed(shouldSidebarShow);
  }, [shouldSidebarShow]);

  let user = useSelector((state: any) => state?.user?.currentUser?.isAdmin);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    signOut(dispatch);
  }, []);

  const loginRedirect = (element: JSX.Element) => {
    return user ? element : <Navigate replace to="/login" />;
  };

  useEffect(() => {
    EventBus.on("logout", () => {
      logout();
    });

    return () => {
      EventBus.remove("logout", () => {
        logout();
      });
    };
  }, [logout]);

  return (
    <BrowserRouter>
      <div className="App">
        {user && <Navbar setState={setIsClosed} />}
        <div className="container">
          {user && (
            <Sidebar
              state={isClosed}
              shouldSidebarShow={shouldSidebarShow}
              setState={setIsClosed}
            />
          )}
          <Routes>
            <Route path="/" element={loginRedirect(<Home />)} />
            <Route path="/products" element={loginRedirect(<Products />)} />
            <Route path="/users" element={loginRedirect(<Users />)} />
            <Route
              path="/product/:slug"
              element={loginRedirect(<SingleProduct />)}
            />
            <Route path="/user/:id" element={loginRedirect(<Home />)} />
            <Route
              path="/product/new"
              element={loginRedirect(<CreateProduct />)}
            />
            <Route path="/user/new" element={loginRedirect(<Home />)} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate replace to="/" />}
            />
            <Route path="/settings" element={loginRedirect(<Home />)} />
            <Route path="/profile" element={loginRedirect(<Home />)} />
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
