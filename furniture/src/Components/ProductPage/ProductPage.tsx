import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productName } = useParams();
  return (
    <>
      <h1>{productName}</h1>
    </>
  );
};

export default ProductPage;

// useNavigate to redirect to 404 page if productName not in product.id.slug
