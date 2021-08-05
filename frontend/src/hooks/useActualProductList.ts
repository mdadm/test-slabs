import axios from "axios";
import { useEffect, useState } from "react";

import { Product, ResponseData } from "../types/types";
import { getProductFromResponse } from "../utils/helper";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

declare let process: {
  env: {
    REACT_APP_URL: string
  }
};

export function useActualProductList():Product[] {
  const [itemList, setItemList] = useState<Array<Product>>([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_URL;

    apiUrl && axios.get(apiUrl).then((resp) => {
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

  return productsList;
}
