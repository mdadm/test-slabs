import { useEffect, useState } from "react";
import { Product, ResponseData } from "../types/types";
import axios from "axios";
import { getProductFromResponse } from "../utils/helper";

require('dotenv').config();

declare let process: {
  env: {
    REACT_APP_URL: string
  }
};

export function useActualProductList() {
  const [itemList, setItemList] = useState<Array<Product>>([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_URL;

    apiUrl && axios.get(apiUrl).then((resp) => {
      const dataArray: ResponseData[] = resp.data;

      const allProducts = dataArray.map(item => getProductFromResponse(item));
      setItemList(allProducts);
    });
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

  return productsList;
}
