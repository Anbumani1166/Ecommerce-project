import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsJustify } from 'react-icons/bs';
import useFetch from './custom-hook/useFetch';
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import {useDispatch,useSelector} from 'react-redux'
import {addItem} from './store/Cartslice'

const Productdetails = () => {
  let navigate=useNavigate()
  // const [product,setProduct]=useState([])
  // const [error,setError]=useState("")
  // const [isLoding,setIsLoding]=useState(true)
  // useEffect(()=>{
  //  fetch("http://localhost:4000/product",{method:"GET"})
  //  .then((res)=>{
  //   if(res.ok){
  //     return res.json()
  //   }
  //   throw new Error("search proper data")
  // })
  //  .then((data)=>{setProduct(data)})
  //  .catch((error)=>{
  //   setError(error.message)
    
  //  })
  //  .finally(()=>{
  //   setIsLoding(false)
  //  })
  // },[])

  //custom-hook
  let {product,error,isLoding,setProduct}=useFetch("https://fakestoreapi.com/products")

    let dispatch = useDispatch()

    let cartState =useSelector( (state)=>{
      return state.cart

    }) 

  let addItemToCart =(product)=>{
    let checkProduct =cartState.some(cartProduct=> cartProduct.id ===product.id)

    if(!checkProduct){

      dispatch(addItem(product))
    }else{

      alert("product already added")
    }
    
  }
    
  if(isLoding){
    return <div>
      <h1>Loding</h1>
    </div>
  }

  let handleDelete =((id)=>{
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    
    .then(()=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

let newProductList =product.filter(product=>product.id !== id)
setProduct(newProductList)

    })
  })

  return (
    <div className='viewcart'>
      <article className='newcart'>
        <span style={{"margin-right":"30px"}}>To Create New Product</span> 
        <Button onClick={()=>{navigate("/newProduct")}}>Click Me</Button>
      </article>
      {  product.length !==0 &&
      <section className='products'>
        {
          product.map((product)=>(
                <Card key={product.id} style={{ width: '18rem',height:'24rem' }} className='product'>
                  <center>

      <Card.Img variant="top" src={product.image} style={{width:"9rem",height:"12rem"}}/>
                  </center>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text >
          ${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Button variant='primary' onClick={()=>addItemToCart(product)}><FaShoppingCart /></Button>
        <Button variant='secondary' onClick={()=>{navigate(`/update/${product.id}`)}}><FaEdit /></Button>
        <Button variant='danger' onClick={()=>{handleDelete(product.id)}}><MdDelete /></Button>
      </Card.Footer>
    </Card>
          ))
        }
      </section>
      }
      {
        error && <p>{error}</p>
      }
    
    </div>
  )
}

export default Productdetails