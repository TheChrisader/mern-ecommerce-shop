import { useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";

import "./Widget.scss";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const Widget: React.FC<Props> = ({ icon, title, description }) => {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const isWidgetVisible = useObserver(widgetRef);

  return (
    <div
      className={"widget-wrapper " + (isWidgetVisible && "widget-active")}
      ref={widgetRef}
    >
      <i className={"widget-icon " + icon}></i>
      <h3 className="widget-title">{title}</h3>
      <span className="widget-desc">{description}</span>
      <span className="more">Read More</span>
    </div>
  );
};

export default Widget;
