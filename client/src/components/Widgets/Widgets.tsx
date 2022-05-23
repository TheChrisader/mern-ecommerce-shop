import "./Widgets.scss";

import Widget from "../Widget/Widget";

export type Props = {
  icon: string;
  title: string;
  description: string;
};

const Widgets: React.FC = () => {
  return (
    <div className="widgets-container">
      <Widget
        icon="fa-solid fa-box"
        title="Latest Styles"
        description="Our designs follow the latest fashion styles to help you stay updated with new trends."
      />
      <Widget
        icon="fa-solid fa-box"
        title="Latest Styles"
        description="Our designs follow the latest fashion styles to help you stay updated with new trends."
      />
      <Widget
        icon="fa-solid fa-box"
        title="Latest Styles"
        description="Our designs follow the latest fashion styles to help you stay updated with new trends."
      />
    </div>
  );
};

export default Widgets;
