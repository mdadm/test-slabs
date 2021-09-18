import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import styled from 'styled-components';

import { ErrorMessage } from "./ErrorMessage";
import { ExpandButton } from "./ExpandButton";
import { ProductCard } from "./ProductCard";
import { SubProduct } from "./SubProduct";
import { CreateProductButton } from "./CreateProductButton";
import { CreateProductForm } from "./CreateProductForm";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Product } from "../types/types";


const StyledAppHeader = styled.div`
    text-align: center;
    margin-bottom: 48px;
`;

const StyledCreateProductPanel = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-left: 48px;
    margin-right: 48px;
`;

const StyledProductPanel = styled.div`
    justify-content: space-around;
    flex-direction: column;
    margin-left: 48px;
    margin-right: 48px;
`;

const StyledProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    margin: 0 auto 24px;
`;

const StyledProductButtonsPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledModalButtonsPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledModalButton = styled.div`
    button {
      width: 100px;
      font-family: inherit;
      appearance: none;
      border: 0;
      border-radius: 20px;
      color: #fff;
      padding: 8px 16px;
      font-size: 1rem;
      cursor: pointer;
      margin: 24px 48px;
      opacity: 0.7;
    }
    
    button:hover {
      opacity: 1;
    }
    
    button:focus {
      outline: none;
      box-shadow: 0 0 0 8px #cbd6ee;
    }
`;

const StyledConfirmModalButton = styled.div`
      button {
        background-color: red;
      }
`;
const StyledCloseModalButton = styled.div`
      button {
        background-color: #6a6867;
      }
`;

type ProductsListProps = {
  productsList: Product[];
  deleteCurrentProduct: (product: Product) => void;
};

export function ProductsList({ productsList, deleteCurrentProduct }: ProductsListProps): JSX.Element {
  const [activeProductIndex, setActiveProductIndex] = useState(-1);
  const [isCreateButtonPressed, setCreateButtonPressed] = useState(false);
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  const openTab = (key: number) => {
    let activeTabIndex = key;
    key === activeProductIndex && (activeTabIndex = -1);

    setActiveProductIndex(activeTabIndex);
  };

  const openCreateProductForm = () => {
    setCreateButtonPressed(!isCreateButtonPressed);
  };

  const confirmProductDelete = (product: Product) => {
    setModal(true);

    console.log('product: ', product.Name);
    console.log('isModal: ', isModal);

    return (
      <DeleteConfirmModal
        visible={isModal}
        title={`Delete ${product.Name}`}
        content={<p>Do you really want to delete {product.Name}? This action cannot be undone</p>}
        footer={
          <StyledModalButtonsPanel>
            <StyledModalButton>
              <StyledConfirmModalButton>
                <button onClick={() => deleteCurrentProduct(product)}>Confirm</button>
              </StyledConfirmModalButton>
            </StyledModalButton>
            <StyledModalButton>
              <StyledCloseModalButton>
                <button onClick={onClose}>Close</button>
              </StyledCloseModalButton>
            </StyledModalButton>
          </StyledModalButtonsPanel>
        }
        onClose={onClose}
      />
    )
  }

  return (
    <div>
      <StyledAppHeader>
        <h1>Products</h1>
      </StyledAppHeader>
      <StyledCreateProductPanel>
        <IconButton aria-label="expand" onClick={() => openCreateProductForm()}>
          {CreateProductButton(isCreateButtonPressed)}
        </IconButton>
      </StyledCreateProductPanel>
      {isCreateButtonPressed && <CreateProductForm onClose={() => {
        setCreateButtonPressed(false)
      }}/>}
      {productsList.length ? productsList.map((item, key) => (
          <StyledProductPanel key={`products-panel-${key}`}>
            <StyledProducts key={key}
                            className={`products${key === activeProductIndex ? ' active' : ''}`}
                            data-index={key}
            >
              <ProductCard product={item}/>
              <StyledProductButtonsPanel>
                <div>
                  <IconButton aria-label="expand" onClick={() => openTab(key)}>
                    {ExpandButton(key, activeProductIndex)}
                  </IconButton>
                </div>
                <div>
                  <IconButton aria-label="delete" onClick={() => confirmProductDelete(item)}>
                    <DeleteForeverIcon fontSize="small"/>
                  </IconButton>
                </div>
                {/*<div>*/}
                {/*</div>*/}
              </StyledProductButtonsPanel>
            </StyledProducts>
            <div>
              {activeProductIndex === key && (
                <SubProduct {...productsList[activeProductIndex]} />)}
            </div>
            <hr/>
          </StyledProductPanel>
        )) :
        <ErrorMessage
          message="Something went wrong!"
          description="Seems like you forgot set up an url to .env file or
          some errors occurred when receiving data from the server"
        />}
    </div>
  )
}
