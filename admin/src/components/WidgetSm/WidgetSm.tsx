import "./WidgetSm.scss";

type Props = {
  type: string;
};

type DataObject = {
  title: string;
  isMoney: boolean;
  link: string;
};

const WidgetSm: React.FC<Props> = ({ type }) => {
  let data: DataObject | undefined = undefined;

  let amount = 200;
  let percent = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See Net Earnings",
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
          {data?.isMoney && "$"} {amount}
        </span>
        <span className="widget-link">{data?.link}</span>
      </div>
      <div className="widget-right">
        <div className="percentage">{percent}%</div>
      </div>
    </section>
  );
};

export default WidgetSm;
