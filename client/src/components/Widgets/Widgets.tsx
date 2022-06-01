import { useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";

import Widget from "../Widget/Widget";

import "./Widgets.scss";

export type Props = {
  icon: string;
  title: string;
  description: string;
};

const Widgets: React.FC = () => {
  const trendTitleRef = useRef<HTMLHeadingElement | null>(null);
  let isTrendVisible = useObserver(trendTitleRef);

  return (
    <div className="trend">
      <div className="trend-container">
        <h1
          className={"trend-title " + (isTrendVisible && "trend-title-active")}
          ref={trendTitleRef}
        >
          Stay in Trend with ShopLite
        </h1>
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
      </div>
    </div>
  );
};

export default Widgets;
