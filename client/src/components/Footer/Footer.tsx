import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-left">
        <h3 className="footer-brand">ShopLite</h3>
        <span className="copyright">© Copyright 2020.</span>
      </div>
      <div className="footer-center">
        <i className="footer-icon fa-brands fa-facebook"></i>
        <i className="footer-icon fa-brands fa-twitter"></i>
        <i className="footer-icon fa-brands fa-linkedin"></i>
        <i className="footer-icon fa-brands fa-instagram-square"></i>
      </div>
      <div className="footer-right">
        <img
          src="https://static.live.templately.com/2020/06/d84f314a-cards.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
