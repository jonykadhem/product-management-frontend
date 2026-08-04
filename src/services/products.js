const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

const index = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`)
    if (!response.ok) {
      throw new Error('No products found')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

const show = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    if (!response.ok) {
      throw new Error('Product not found')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

const create = async (productData) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    if (!response.ok) {
      throw new Error('Failed to create product')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}
const update = async (id, productData) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    if (!response.ok) {
      throw new Error('Failed to update product')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error('Failed to delete product')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error deleting product:', error)
    throw error
  }
}

export { index, show, create, update, deleteProduct }