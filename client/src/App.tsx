import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import "./App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
