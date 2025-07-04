
import React, { useEffect, useState } from 'react'
import{Button, Grid, Paper, TextField, Typography} from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const UpdateProduct = () => {
    let paperStyle = {
        width :400,
        margin : "20px auto",
        padding : "20px"
    }

    let [updateProduct,setUpdateProduct]=useState(null)
    let {id}=useParams()
    let navigate=useNavigate()

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setUpdateProduct(res.data))
    },[])
    
    let handleChange = (e)=>{
      let {name,value}=e.target
      let feildName =  name.split("rating.")[1]
      console.log(feildName);
      
      if(name.includes("rating.")){
        setUpdateProduct({
            ...updateProduct,
            rating :{
                ...updateProduct.rating,
                [feildName]:value
            }
        })
      } else{

          setUpdateProduct({
            ...updateProduct,
            [name] : value
          })
          
      } 
    }
    
    let handleUpdate = (e)=>{
        e.preventDefault()
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method : "PUT",
            header :{
               " content-Type" : "application/json"
            },
            body : JSON.stringify(updateProduct)
        })

        .then(()=>{
            alert("saved successfully")
            navigate("/Product")

        })
    }
    if(updateProduct!==null){
        return (
          <Paper elevation={20} style={paperStyle}>
              <Typography variant='h5' textAlign="center">Update Product</Typography>
              <Grid onSubmit={handleUpdate} component="form" style={{display:"grid",gap:"20px"}}>
                  <TextField name='title' value={updateProduct.title}  label="Title" variant="outlined" fullWidth onChange={handleChange}/>
                  <TextField name='category' value={updateProduct.category} label="Category" variant="outlined" fullWidth onChange={handleChange} />
                  <Grid container spacing={2}>
                      <Grid size={6}>
                        <TextField name='rating.rate'value={updateProduct.rating.rate} type="number" label="Rating" variant="outlined" onChange={handleChange}/>
                      </Grid>
                      <Grid size={6}>
                        <TextField name='rating.count' value={updateProduct.rating.count} type="number" label="Count" variant="outlined" onChange={handleChange}/>
                      </Grid>
                  </Grid>
                 <Button type='submit' color='success'  variant="contained"fullWidth>Save</Button>
              </Grid>
       
          </Paper>
        )
    }else{
        <div>loading..</div>
    }
}

export default UpdateProduct