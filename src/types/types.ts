export type ResponseData = {
  AccessType: string | null,
  Language: string,
  Name: string,
  ParentID: string | null,
  ProductID: string,
  Relation: string | null,
  Type: string,
  colorscheme: string,
  descriptionen: string | null,
  descriptionru: string | null,
  isDeleted: boolean
};

export type Product = {
  accessType: string | null,
  language: string,
  name: string,
  parentID: string | null,
  productID: string,
  relation: string | null,
  type: string | null
  colorscheme: string,
  descriptionen: string | null,
  descriptionru: string | null,
  isDeleted: boolean,
  childProducts?: Product[]
};
