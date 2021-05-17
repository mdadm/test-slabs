import React, { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { SubProduct } from "./components/SubProduct";
import { useActualProductList } from "./hooks/useActualProductList";

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

      {productsList.map((item, key) => (
        <div className="products-panel" key={`products-panel-${key}`}>
          <div key={key}
               className={`products${key === activeProductIndex ? ' active' : ''}`}
               data-index={key}
          >
            <ProductCard product={item}/>
            <button className="button" onClick={() => openTab(key)}>
              {key !== activeProductIndex ? 'expand' : 'collapse'}
            </button>
          </div>
          <div>
            {activeProductIndex === key && (
              <SubProduct {...productsList[activeProductIndex]} />)}
          </div>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default App;
