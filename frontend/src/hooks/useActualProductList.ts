import axios from "axios";
import { useEffect, useState } from "react";

import { Product, ResponseData } from "../types/types";
import { getProductFromResponse } from "../utils/helper";
import { addProductList } from "../reducers/ProductReducer";
import { store } from "../reducers";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

declare let process: {
  env: {
    REACT_APP_BACKEND_URL: string
  }
};

export function useActualProductList() {
  const [itemList, setItemList] = useState<Array<Product>>([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_BACKEND_URL;

    apiUrl && axios.get(`${apiUrl}/data`).then((resp) => {
      const dataArray: ResponseData[] = resp.data;

      const allProducts = dataArray.map(item => getProductFromResponse(item));
      setItemList(allProducts);
    }).catch(e => console.error(e));
  }, [setItemList]);

  const actualProducts = itemList.filter(product => !product.isDeleted)

  const productsList = actualProducts.filter(product =>
    product.parentID === null
  );

  productsList.forEach(parentProduct => {
    parentProduct.childProducts = actualProducts.filter(item =>
      item.parentID === parentProduct.productID
    );
  });

  productsList.sort((product1, product2) =>
    product1.Name.localeCompare(product2.Name));

  store.dispatch(addProductList(productsList));
}
