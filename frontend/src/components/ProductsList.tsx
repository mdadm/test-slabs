import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import styled from 'styled-components';

import { useActualProductList } from "../hooks/useActualProductList";
import { ErrorMessage } from "./ErrorMessage";
import { ExpandButton } from "./ExpandButton";
import { ProductCard } from "./ProductCard";
import { SubProduct } from "./SubProduct";


const AppHeaderStyled = styled.div`
    text-align: center;
    margin-bottom: 48px;
`;

const ProductPanelStyled = styled.div`
    justify-content: space-around;
    flex-direction: column;
    margin-left: 48px;
    margin-right: 48px;
`;

const ProductsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    margin: 0 auto 24px;
`;

export function ProductsList(): JSX.Element {
  const [activeProductIndex, setActiveProductIndex] = useState(-1);

  const openTab = (key: number) => {
    let activeTabIndex = key;
    key === activeProductIndex && (activeTabIndex = -1);

    setActiveProductIndex(activeTabIndex);
  };

  const productsList = useActualProductList();

  return (
    <div>
      <AppHeaderStyled>
        <h1>Products</h1>
      </AppHeaderStyled>
      {productsList.length ? productsList.map((item, key) => (
          <ProductPanelStyled key={`products-panel-${key}`}>
            <ProductsStyled key={key}
                 className={`products${key === activeProductIndex ? ' active' : ''}`}
                 data-index={key}
            >
              <ProductCard product={item}/>
              <div>
                <IconButton aria-label="expand" onClick={() => openTab(key)} >
                  {ExpandButton(key, activeProductIndex)}
                </IconButton>
              </div>
            </ProductsStyled>
            <div>
              {activeProductIndex === key && (
                <SubProduct {...productsList[activeProductIndex]} />)}
            </div>
            <hr/>
          </ProductPanelStyled>
        )) :
        <ErrorMessage
          message="Something went wrong!"
          description="Seems like you forgot set up an url to .env file or
          some errors occurred when receiving data from the server"
        />}
    </div>
  )
}
