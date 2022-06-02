import React from 'react'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import actions from './action/constants'

const mapStateToProps = (state) => ({
    products: state.productsOldModule.products
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addItem: (product) => dispatch({ type: actions.ADD_TO_CART_OLD, payload: product })
    }
  }

 function ProductListContainer(props) {
  console.log("renderlist")

    const { products } = props;
  return (
    <div>

<h1>This is the tried and trusty connect</h1>
 {
          products.map((product) => {
            return (
              <ProductItem product={product} key={product.id} dispatchToStore={props.addItem} />
            )
          })
        }

    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)