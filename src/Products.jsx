import { customProduct } from "./dummyProducts";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, deleteIteam } from "./productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);

  function fetchAllProduct() {
    const productData = customProduct;
    dispatch(getAllProduct(productData));
  }
  function deleteProduct(id) {
    dispatch(deleteIteam(id));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={fetchAllProduct}>Get All Product</button>
      {productState.products.map((p) => {
        return (
          <div key={p.id}>
            {p.name}
            {p.description}
            {p.amount}
            <button
              onClick={() => {
                deleteProduct(p.id);
              }}
            >
              Delete Product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
