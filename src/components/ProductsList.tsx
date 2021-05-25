import { IconButton } from "@material-ui/core";
import React, { useState } from "react";

import { useActualProductList } from "../hooks/useActualProductList";
import { ErrorMessage } from "./ErrorMessage";
import { ExpandButton } from "./ExpandButton";
import { ProductCard } from "./ProductCard";
import { SubProduct } from "./SubProduct";

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
      <div className="app-header">
        <h1>Products</h1>
      </div>
      {productsList.length ? productsList.map((item, key) => (
          <div className="products-panel" key={`products-panel-${key}`}>
            <div key={key}
                 className={`products${key === activeProductIndex ? ' active' : ''}`}
                 data-index={key}
            >
              <ProductCard product={item}/>
              <div>
                <IconButton aria-label="expand" onClick={() => openTab(key)} >
                  {ExpandButton(key, activeProductIndex)}
                </IconButton>
              </div>
            </div>
            <div>
              {activeProductIndex === key && (
                <SubProduct {...productsList[activeProductIndex]} />)}
            </div>
            <hr/>
          </div>
        )) :
        <ErrorMessage
          message="Something went wrong!"
          description="Seems like you forgot set up an url to .env file or
          some errors occurred when receiving data from the server"
        />}
    </div>
  )
}
