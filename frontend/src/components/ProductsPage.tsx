import { useSelector } from "react-redux";
import { ProductState, removeProduct } from "../reducers/ProductReducer";
import { Product } from "../types/types";
import { store } from "../reducers";
import { ProductsList } from "./ProductsList";

export const ProductsPage = () => {
  const productsList = useSelector((state: ProductState) => state.productList);

  const deleteCurrentProduct = (product: Product) => {
    console.log('Product to delete: ', product.Name);
    store.dispatch(removeProduct(product));
  };

  return (
    <ProductsList productsList={productsList} deleteCurrentProduct={deleteCurrentProduct}/>
  )
}
