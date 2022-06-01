import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from './action'

export default function MyProduct() {

  const myProduct =  useSelector((state) => state.product?.items);


  const myDispatch = useDispatch();

    useEffect(()=> {

      fetch("https://fakestoreapi.com/products")
      .then(y=>y.json())
      .then(y=> {myDispatch(GetProduct(y))})


    },[])


  return (
    <table>
      {

        myProduct.map((value)=> {

          return(
          
            <tr>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.price}</td>
              <td><img src={value.image} /></td>
            </tr>

          )


        })
      }
        
    </table>
  )
}
