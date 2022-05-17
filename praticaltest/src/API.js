import React, { useEffect, useState } from 'react'

function API() {
   
     const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json))
    },[])
  return (
    <>
    <table>
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>



        </tr>
       {
           data?.map((value)=>{
              return (
                  <>
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.price}</td>
                        <td>{value.description}</td>
                        <td>{value.category}</td>
                        <td><img style={{height: 20 + 'px',width:20 + "px"}} src={value.image} alt="" /></td>


                    </tr>
                  </>
              )
           })
       }
      </table>
    </>
  )
}

export default API