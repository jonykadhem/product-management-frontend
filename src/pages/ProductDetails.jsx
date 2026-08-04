import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router"
import { show } from "../services/products"
import { useEffect } from "react"
import { deleteProduct } from "../services/products"


const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

    useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await show(productId)
        setProduct(data.product)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
    }, [productId])

    const handleDelete = async () => {
      try {
        await deleteProduct(productId)
        navigate('/products')
      } catch (error) {
        setError(error.message)
      }
    }

    if (loading) {
      return <p>Loading product details...</p>
    }
    if (error) {
      return <p>Error: {error}</p>
    }
    if (!product) {
      return <p>Product not found.</p>
    }


    return (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <Link to={`/products/${productId}/edit`}>Edit</Link>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </div>
      )
}

export default ProductDetails
