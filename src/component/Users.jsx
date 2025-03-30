import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

  const [product , setProduct] = useState();
  const [loading, setLoading]=useState(true);
  


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
    <>
    <div className='prod-containe'>
      {
        loading ? <>loading</>:
        product.map((el, index)=> (
          <div className='card'>
          <img src={el.image} width={200} height={200} />

            <div key={index}>
           {el.title}
           
          </div>
          <div > {
              el.price
             }</div>
              <div className='button'> Buy  </div>
          </div>
        ))
      }
    </div>
     {}
    </>
  )
}

export default Users
