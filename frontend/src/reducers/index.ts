import { createStore } from "redux";
import ProductReducer from "./ProductReducer";

export const store = createStore(
  ProductReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
