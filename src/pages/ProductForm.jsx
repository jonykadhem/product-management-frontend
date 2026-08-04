import {useState} from "react"
import {useNavigate} from "react-router"
import {create} from "../services/products"

const ProductForm = (props) => {

    const navigate = useNavigate()

    const initialState = {
        title: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
    }
    const [product, setProduct] = useState(initialState)
    const [error, setError] = useState(null)
  
  const handleChange = (e) => {
    setError(null)
    setProduct({...product, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const productData = await create(product)
        props.setProducts([...props.products, productData])
        setProduct(initialState)
        navigate('/products')
    }catch (error) {
        setError(error.message)
    }
  }

  return (
    <div>
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ProductForm