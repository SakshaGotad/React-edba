import React, { useEffect, useState } from 'react'
import './dummy.css';
const Dummy = () => {

  const [product , setProduct] =useState();
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
 fetchData();
  },[])


  const fetchData = async()=>{
    setLoading(true)
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    if(data.success== 200){
      console.log(data.data);
    } 
    setProduct(data);
    setLoading(false);
  } 

  
  return (
    <>
    <div className='dummy-container'>

    {
        loading? <> loading </>:
        product.map((el,index)=>(
        
           
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
          
          
           
            )
        )
        
      }
     
      
    </div>
     
    </>
  )
}

export default Dummy
