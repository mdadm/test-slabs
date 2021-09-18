import { Action } from "redux";
import { Product } from "../types/types";

export interface ProductActionInterface extends Action {
  product?: Product;
  productList: Product[];
}

export type ProductState = {
  product?: Product;
  productList: Product[];
}

const defaultState: ProductState = {
  productList: [],
}

export default function ProductReducer(
  state = defaultState,
  action: ProductActionInterface
): ProductState {
  switch (action.type) {
    case 'ADD_PRODUCTS_LIST':
      return {
        productList: action.productList,
      } as ProductState
    case 'ADD_PRODUCT_TO_LIST':
      return {
        productList: [...state.productList, action.product],
      } as ProductState
    case 'REMOVE_PRODUCT_FROM_LIST':
      const newState = state.productList.filter(item =>
        item.productID !== action.product?.productID
      );
      return {
        productList: newState
      } as ProductState
    default: {
      return state
    }
  }
}

export const addProductList = (ProductList: Product[]) => ({
  type: 'ADD_PRODUCTS_LIST',
  productList: ProductList,
}) as ProductActionInterface;

export const addProduct = (Product: Product) => ({
  type: 'ADD_PRODUCT_TO_LIST',
  product: Product,
}) as ProductActionInterface;

export const removeProduct = (Product: Product) => ({
  type: 'REMOVE_PRODUCT_FROM_LIST',
  product: Product,
}) as ProductActionInterface;
