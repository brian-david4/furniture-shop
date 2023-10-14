import { useParams } from "react-router-dom";
import { products } from "../../Data/data";

const ProductPage = () => {
  const { productName } = useParams();
  const product = products.find((prod) => prod.id.slug === productName);
  const pr = JSON.stringify(product);

  return (
    <>
      <h1>{pr}</h1>
    </>
  );
};

export default ProductPage;

// useNavigate to redirect to 404 page if productName not in product.id.slug
