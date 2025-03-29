import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

  const [product , setProduct] = useState();
  const [loading , setLoading]=useState(true);



useEffect(()=>{
  fetchData();
},[])
  
  const fetchData = async()=>{
    setLoading(true)
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    if(data.success== 200){
      console.log(data.data);
    } 
    setProduct(data);
    setLoading(false);
  } 


  const {id} = useParams();
    
  return (
    <div>
      user {id}
    </div>
  )
}

export default Users
