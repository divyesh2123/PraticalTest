import React from 'react'
import { partial } from 'ramda';

 function ProductItem({product,dispatchToStore}) {
    function handleClick(product, event ) {
        event.preventDefault();
        dispatchToStore(product);
      }


  return (
    <div>
  <div className="productItem">
      <div className="productItem__title">
        {product.title}
      </div>
      <div className="productItem__price">
        ${product.value}
      </div>
      <div className="productItem__quantity">
        x {product.quantity}
      </div>
      <div className="productItem__purchase">
        <button
          onClick={partial(handleClick, [product])}
          disabled={product.quantity === 0}
        >
          Buy One
        </button>
      </div>
    </div>

    </div>
  )
}
export default React.memo(ProductItem);