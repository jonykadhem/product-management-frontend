import { useState, useEffect } from "react"
import {index} from "../services/products"
import {Link} from "react-router"

const ProductList = () => {
  const [products, setProducts] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(false)
        const data = await index()
        setProducts(data.products)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <p>Loading products...</p>
  }
    if (error) {
      return <p>Error: {error}</p>
    }

  return (
    <div>
      <h1>Product List</h1>
      
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
            <p>${product.price}</p>
          </div>
        ))}
      
    </div>
  )
}


export default ProductList