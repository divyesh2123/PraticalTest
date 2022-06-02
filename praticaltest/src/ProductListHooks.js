import React, { useCallback, useState, memo } from 'react';
import { useSelector, shallowEqual,useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import actions from './action/constants'

export default function ProductListHooks() {
  console.log("renderlisthook")
  
    const dispatch = useDispatch();

    const products = useSelector((state) => state.productsModule.products);

    const dispatchToStore = (payload) =>{

        dispatch({type : actions.ADD_TO_CART,payload : payload})
    }
    

  return (
    <div>


      <h1>Product Container with useSelector Hooks</h1>
      {
        products.map((product) => {
          return (
            <ProductItem product={product} key={product.id} dispatchToStore={dispatchToStore} />
          )
        })
      }
      <hr></hr>

    </div>
  )
}
