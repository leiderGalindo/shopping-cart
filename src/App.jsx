import { useState } from "react";
import { products as  initialProducts } from "./mocks/products.json";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/cart.jsx";
import Products from "./components/products/Products"
import Header from "./components/Header";

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
