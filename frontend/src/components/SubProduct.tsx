import React from "react";
import styled from "styled-components";

import { Product } from "../types/types";
import { getDescription } from "../utils/helper";

const AccordionWrapper = styled.div`

`;

const SubProductsPanelWrapper = styled.div`
    justify-content: space-around;
    flex-direction: column;
    background-color: #eee;
    padding: 24px;
    margin-bottom: 24px;
`;

const SubProductWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
`;

const SubProductsItemFieldWrapper = styled.div`
    margin-bottom: 12px;
`;

export const SubProduct = (product: Product): JSX.Element => (
  <AccordionWrapper>
    <SubProductsPanelWrapper>
      <h3>Sub Products</h3>
      {product.childProducts?.length ? product.childProducts.map((childProduct, key) => (
          <SubProductWrapper key={key}>
            <h4>{childProduct.name}</h4>
            <SubProductsItemFieldWrapper>
              Type: {childProduct.type}
            </SubProductsItemFieldWrapper>
            <SubProductsItemFieldWrapper>
              Description: {getDescription(product)}
            </SubProductsItemFieldWrapper>
          </SubProductWrapper>
        )) :
        <SubProductsItemFieldWrapper>No sub products yet</SubProductsItemFieldWrapper>
      }
    </SubProductsPanelWrapper>
  </AccordionWrapper>
);
//
