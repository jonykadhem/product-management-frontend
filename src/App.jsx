import Home from './pages/Home'
import ProductList from './pages/ProductList'
import { Routes, Route } from "react-router"
import{useState, useEffect } from "react"
import ProductForm from './pages/ProductForm'
import ProductDetails from './pages/ProductDetails'
import UpdateProduct from './pages/UpdateProduct'
import Nav from './components/Nav'

const App = () => {

  const [products, setProducts] = useState([])

  return (

    <div>
      <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList  products={products} />} />
      <Route path="/products/new" element={<ProductForm  setProducts={setProducts} products={products}/>} />
      <Route path="/products/:productId" element={<ProductDetails products={products} />} />
      <Route path="/products/:productId/edit" element={<UpdateProduct products={products} setProducts={setProducts} />} />
    </Routes>
    </div>
  )
}

export default App
