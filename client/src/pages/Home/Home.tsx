import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <Slider />
        <h2 className="products-heading">Our Products</h2>
        <Products />
        <div className="trend"></div>
      </div>
    </div>
  );
};

export default Home;
