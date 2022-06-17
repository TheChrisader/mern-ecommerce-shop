import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Widgets from "../../components/Widgets/Widgets";

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Products />
      <Widgets />
    </>
  );
};

export default Home;
