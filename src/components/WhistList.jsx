import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { deleteItem } from './store/Cartslice';
import { useDispatch, useSelector } from 'react-redux'

const WhistList = () => {

  let cartProducts = useSelector((state)=>{
    return state.cart
  })
  
  let dispatch = useDispatch()
  let handleDelete =(reduxItemId)=>{

    dispatch(deleteItem(reduxItemId))
  }
  
  return (
   <div>
      {  cartProducts.length !==0 ?(
      <section className='products'>
        {
          cartProducts.map((product)=>(
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
        <Button variant='danger' onClick={()=>{handleDelete(product.id)}}><MdDelete /></Button>
      </Card.Footer>
    </Card>
          ))
        }
      </section>
      ): <h1>Buy somthing</h1>
      }
  
    
    </div>

  )
}

export default WhistList