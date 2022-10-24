import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./WidgetSm.scss";

type Props = {
  type: "user" | "order" | "product";
};

type DataObject = {
  title: string;
  isMoney: boolean;
  link: string;
  url: string;
  amount: number;
};

const WidgetSm: React.FC<Props> = ({ type }) => {
  let data: DataObject | undefined = undefined;

  const userCount = useSelector((state: any) => state.users.users.length);
  const productCount = useSelector(
    (state: any) => state.product.products.length
  );
  const orderCount = useSelector((state: any) => state.order.orders.length);

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        url: "users",
        amount: userCount,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        url: "orders",
        amount: orderCount,
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        isMoney: true,
        link: "See All Products",
        url: "products",
        amount: productCount,
      };
      break;
    default:
      break;
  }

  return (
    <section className="widget-wrapper">
      <div className="widget-left">
        <span className="widget-title">{data?.title}</span>
        <span className="widget-number">
          {/* {data?.isMoney && "$ "} */}
          {data?.amount}
        </span>
        <Link to={`${data?.url}`} className="widget-link link">
          {data?.link}
        </Link>
      </div>
      {/* <div className="widget-right">
        <div className="percentage">{percent}%</div>
      </div> */}
    </section>
  );
};

export default WidgetSm;
