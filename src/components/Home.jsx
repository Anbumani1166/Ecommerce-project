import React from 'react'
import useFetch from './custom-hook/useFetch'

const Home = () => {
  let {product}=useFetch("http://localhost:4000/product")
  return (
    <div>
      <h1>Home - TotalProduct -{product.length}</h1>
    </div>
  )
}

export default Home