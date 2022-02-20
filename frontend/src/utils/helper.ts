import { Product, ResponseData } from "../types/types";
import { FormikValues } from "formik";

export function getProductFromResponse(resp: ResponseData):Product {
    return {
      accessType: resp.AccessType,
      language: resp.Language,
      Name: resp.Name,
      parentID: resp.ParentID,
      productID: resp.ProductID,
      relation: resp.Relation,
      type: resp.Type,
      colorscheme: resp.colorscheme,
      descriptionen: resp.descriptionen,
      descriptionru: resp.descriptionru,
      isDeleted: resp.isDeleted
    };
}

export function getDescription(product: Product): string {
  return product.descriptionru || product.descriptionen || 'No description yet'
}

export function getRequestFromFormValues(values: FormikValues):Product {
  return {
    productID: '',
    accessType: values.AccessType,
    language: values.Language,
    Name: values.Name,
    parentID: values.ParentID,
    relation: values.Relation,
    type: values.Type,
    colorscheme: values.colorscheme,
    descriptionen: values.descriptionen,
    descriptionru: values.descriptionru,
    isDeleted: values.isDeleted
  };
}
