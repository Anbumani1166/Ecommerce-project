import React, { useState } from 'react'
import Productitem from './Productitem'

const Shop = () => {
    const [product,setProduct]=useState({
        name:"anbu",
        number : 8778116413,
        email : "anbumani1046@gmail.com"
    })
  return (
    <div>
        <Productitem product ={product}/>
    </div>
  )
}

export default Shop