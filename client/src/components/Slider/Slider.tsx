import "./Slider.scss";

const Slider = () => {
  return (
    <section className="slider-wrapper">
      <div className="slider">
        <div className="slider-text-wrapper">
          <h1 className="slider-heading">Winter 21’</h1>
          <span className="slider-desc">
            Winter layer season is here. Check out our trendy new winter
            collection to stay warm in style.
          </span>
          <div className="slider-price-wrapper">
            <span className="slider-price">Price</span>
            <span className="slider-price-number">$117.99</span>
          </div>
          <button className="slider-button">Shop Now</button>
        </div>
        <div className="slider-img-wrapper">
          <img
            className="slider-img"
            src="https://static.live.templately.com/2020/06/de17b27a-image-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
