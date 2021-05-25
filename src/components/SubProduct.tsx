import React from "react";

import { Product } from "../types/types";
import { getDescription } from "../utils/helper";

export const SubProduct = (product: Product): JSX.Element => (
  <div className="accordion">
    <div className="sub-products-panel">
      <h3>Sub Products</h3>
      {product.childProducts?.length ? product.childProducts.map((childProduct, key) => (
          <div key={key} className="sub-products">
            <h4>{childProduct.name}</h4>
            <div className="sub-products-item">
              Type: {childProduct.type}
            </div>
            <div className="sub-products-item">
              Description: {getDescription(product)}
            </div>
          </div>
        )) :
        <div className="sub-products-item">No sub products yet</div>
      }
    </div>
  </div>
);
