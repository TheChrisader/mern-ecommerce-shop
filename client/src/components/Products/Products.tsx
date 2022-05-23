import Product from "../Product/Product";

import "./Products.scss";

export type Props = {
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  border?: boolean;
};

const Products: React.FC = () => {
  return (
    <div className="products-wrapper">
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python Programming Masterclass"
        price={54.99}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
    </div>
  );
};

export default Products;