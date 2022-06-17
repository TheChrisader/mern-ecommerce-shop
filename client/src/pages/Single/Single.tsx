import "./Single.scss";

const Single = () => {
  return (
    <>
      <section className="product-page-wrapper">
        <div className="product-image-wrapper">
          <div className="product-image-slider-wrapper">
            <img
              src="https://static.live.templately.com/2020/06/161806cd-image-4.png?_ga=2.136872761.822068025.1654376037-709298264.1648206587"
              alt=""
              className="product-image-slider"
            />
          </div>
          <div className="product-images">
            <img
              src="https://static.live.templately.com/2020/06/1210b653-image-1.png?_ga=2.191998755.822068025.1654376037-709298264.1648206587"
              alt=""
              className="product-slider-image"
            />
            <img
              src="https://static.live.templately.com/2020/06/e52b191a-image-2.png?_ga=2.200189863.822068025.1654376037-709298264.1648206587"
              alt=""
              className="product-slider-image"
            />
            <img
              src="https://static.live.templately.com/2020/06/161806cd-image-4.png?_ga=2.136872761.822068025.1654376037-709298264.1648206587"
              alt=""
              className="product-slider-image"
            />
            <img
              src="https://static.live.templately.com/2020/06/c529abfd-image-3.png?_ga=2.165144374.822068025.1654376037-709298264.1648206587"
              alt=""
              className="product-slider-image"
            />
          </div>
        </div>
        <div className="product-text-wrapper">
          <div className="product-title-wrapper">
            <h1 className="product-title">Leather Jacket</h1>
            <span className="product-gender">Men</span>
            <span className="product-review">(1.5k customers review)</span>
          </div>

          <span className="product-description">
            This winter, look bold and sexy in our stylish new leather jackets
            for men. Enjoy the soft, luxurious comfort of premium leather while
            staying warm even when you’re out in the cold.
          </span>
          <button type="button" className="product-page-cart">
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Single;
