import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

export default function Home() {
  const { list: productsList, loading, error } = useSelector((state) => state.products)

  if (loading)
    return <h3 style={{ textAlign: 'center' }}>Fetching products data...</h3>;

  if (error !== '')
    return <h3 style={{ textAlign: 'center' }}>{error}</h3>;

  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}