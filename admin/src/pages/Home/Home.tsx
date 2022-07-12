import Chart from "../../components/Chart/Chart";
import WidgetMd from "../../components/WidgetMd/WidgetMd";
import WidgetsSm from "../../components/WidgetsSm/WidgetsSm";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <WidgetsSm />
      <div className="home-middle-wrapper">
        <WidgetMd />
        <Chart />
      </div>
    </main>
  );
};

export default Home;
