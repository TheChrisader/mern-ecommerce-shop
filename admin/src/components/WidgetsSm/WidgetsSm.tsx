import WidgetSm from "../WidgetSm/WidgetSm";
import "./WidgetsSm.scss";

const WidgetsSm = () => {
  return (
    <div className="widgets-wrapper">
      <WidgetSm type="user" />
      <WidgetSm type="order" />
      <WidgetSm type="product" />
    </div>
  );
};

export default WidgetsSm;
