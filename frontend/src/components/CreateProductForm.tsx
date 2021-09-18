import React from "react";
import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { getRequestFromFormValues } from "../utils/helper";
import { store } from "../reducers";
import { addProduct } from "../reducers/ProductReducer";
import axios from "axios";

const CreateProductPanelStyled = styled.div`
    justify-content: space-around;
    flex-direction: column;
    margin-left: 48px;
    margin-right: 48px;
`;

const CreateProductsFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    h3 {
      margin-bottom: 24px;
    }
    
    Form {
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    
    input {
      height: 36px;
      margin-bottom: 24px;
      border: 1px solid #9ba0a3;
      border-radius: 5px; 
      font: 'Helvetica Neue';
      padding-left:10px
    }
    
    label {
      position: relative;
      font: 'Helvetica Neue';
      padding-left:10px
    }
       
    button {
      width: 100px;
      font-family: inherit;
      appearance: none;
      border: 0;
      border-radius: 20px;
      background: #9ba0a3;
      color: #fff;
      padding: 8px 16px;
      font-size: 1rem;
      cursor: pointer;
      margin: 24px;
    }
    
    button:hover {
      background: #7f8589;
    }
    
    button:focus {
      outline: none;
      box-shadow: 0 0 0 8px #cbd6ee;
    }
`;

const ToggleStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`;

type CreateProductFormProps = {
  onClose: () => void
}


export const CreateProductForm = ({ onClose }: CreateProductFormProps): JSX.Element => {
  const apiUrl = process.env.REACT_APP_BACKEND_URL;

  return (
    <div>
      <CreateProductPanelStyled>
        <h3>Create Product Form</h3>
        <CreateProductsFormStyled>
          <Formik
            initialValues={{ isDeleted: false }}
            onSubmit={(values, { setSubmitting }) => {
              const newProduct = getRequestFromFormValues(values);

              apiUrl && axios.post(`${apiUrl}/create`, newProduct)
                .then((resp) => {
                  store.dispatch(addProduct(resp.data));
                  console.log('DB new Product: ', resp.data);
                })

              setSubmitting(false);
              onClose();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Field id="Name" name="Name" placeholder="Name" />
                <Field id="descriptionru" name="descriptionru" placeholder="Description Ru" />
                <Field id="descriptionen" name="descriptionen" placeholder="Description En" />
                <Field id="Type" name="Type" placeholder="Type" />
                <Field id="accessType" name="accessType" placeholder="Access Type" />
                <Field id="language" name="language" placeholder="Language" />
                <Field id="relation" name="relation" placeholder="Relation" />
                <Field id="parentID" name="parentID" placeholder="Parent ID" />
                <ToggleStyled>
                  <label>
                    <div>Is Deleted?</div>
                    <Field id="isDeleted" type="checkbox" name="isDeleted"/>
                  </label>
                </ToggleStyled>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </CreateProductsFormStyled>
        <hr/>
      </CreateProductPanelStyled>
    </div>
  )
}
