import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url){

      const [product,setProduct]=useState([])
      const [error,setError]=useState("")
      const [isLoding,setIsLoding]=useState(true)
    
      useEffect(()=>{
        let fetchApi = async ()=>{
            try{
                // let res=await fetch(url) //normal method async await 
                // if(res.ok){
                //     let data = await res.json()
                //     setProduct(data)
                // }else{

                //     throw new Error("data not found")
                // }
                let rep = await axios.get(url)  //axios
                setProduct(rep.data)
                                           
            }catch(error){
                setError(error.message)
            }
            finally{
                setIsLoding(false)
            }
        }
        fetchApi()
 

      },[])
      return {product,error,isLoding,setProduct}
}
export default useFetch