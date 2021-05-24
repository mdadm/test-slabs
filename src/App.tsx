import React, { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { SubProduct } from "./components/SubProduct";
import { useActualProductList } from "./hooks/useActualProductList";
import { ErrorMessage } from "./components/ErrorMessage";
import { IconButton } from "@material-ui/core";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

function App() {
  const [activeProductIndex, setActiveProductIndex] = useState(-1);

  const openTab = (key: any) => {
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
                  {key !== activeProductIndex ? <ArrowLeft fontSize="large" /> : <ArrowDropDown fontSize="large" />}
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

export default App;
