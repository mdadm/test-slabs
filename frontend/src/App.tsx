import { useActualProductList } from "./hooks/useActualProductList";
import { ProductsPage } from "./components/ProductsPage";

const App = () => {
  useActualProductList();

  return (
    <ProductsPage />
  )
}

export default App;
