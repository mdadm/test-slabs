import { Product } from "../types/types";
import { getDescription } from "../utils/helper";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="tablinks-item">
      <h2>{product.name}</h2>
      {getDescription(product)}
    </div>
  )
}
