import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Widgets from "../../components/Widgets/Widgets";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <Slider />
        <h2 className="products-heading">Our Products</h2>
        <Products />
        <div className="trend">
          <div className="trend-container">
            <h1 className="trend-title">Stay in Trend with ShopLite</h1>
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
