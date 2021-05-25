import { Product, ResponseData } from "../types/types";

export function getProductFromResponse(resp: ResponseData):Product {
    return {
      accessType: resp.AccessType,
      language: resp.Language,
      name: resp.Name,
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
