import React from 'react'
import useFetch from './custom-hook/useFetch'

const Home = () => {
  let {product}=useFetch("https://fakestoreapi.com/products")
  return (
    <div>
      <h1>Home - TotalProduct -{product.length}</h1>
    </div>
  )
}

export default Home