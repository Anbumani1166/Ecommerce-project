import React, { useState } from 'react'
import{Button, Grid, Paper, TextField, Typography} from "@mui/material"

const NewProduct = () => {
    let paperStyle = {
        width :400,
        margin : "20px auto",
        padding : "20px"
    }

    let [newProduct,setNewProduct]=useState({
    "title": "",
    "price": 500,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 0,
      "count": 0,
    }
    })
    let handleChange = (e)=>{
      let {name,value}=e.target
      let feildName =  name.split("rating.")[1]
      console.log(feildName);
      
      if(name.includes("rating.")){
        setNewProduct({
            ...newProduct,
            rating :{
                ...newProduct.rating,
                [feildName]:value
            }
        })
      } else{

          setNewProduct({
            ...newProduct,
            [name] : value
          })
          
      } 
    }
    
    let handleAdd = (e)=>{
        e.preventDefault()
        fetch("http://localhost:4000/product",{
            method : "POST",
            header :{
               " content-Type" : "application/json"
            },
            body : JSON.stringify(newProduct)
        })

        .then(()=>{
            alert("data Added successfully")
            setNewProduct({
                   "title": "",
                   "price": 500,
                   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                   "category": "",
                   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                   "rating": {
                      "rate": 0,
                        "count": 0,
                           }
            })
        })
    }
  return (
    <Paper elevation={20} style={paperStyle}>
        <Typography variant='h5' textAlign="center">Create New Product</Typography>
        <Grid onSubmit={handleAdd} component="form" style={{display:"grid",gap:"20px"}}>
            <TextField name='title' value={newProduct.title}  label="Title" variant="outlined" fullWidth onChange={handleChange}/>
            <TextField name='category' value={newProduct.category} label="Category" variant="outlined" fullWidth onChange={handleChange} />
            <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField name='rating.rate'value={newProduct.rating.rate} type="number" label="Rating" variant="outlined" onChange={handleChange}/>
                </Grid>
                <Grid size={6}>
                  <TextField name='rating.count' value={newProduct.rating.count} type="number" label="Count" variant="outlined" onChange={handleChange}/>
                </Grid>
            </Grid>
           <Button type='submit' variant="contained"fullWidth>Add</Button>
        </Grid>
 
    </Paper>
  )
}

export default NewProduct