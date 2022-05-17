import React, { useEffect, useRef } from 'react'

export default function MyUnControllForm() {

   const elementData =  useRef()

   const myData = ()=> {

        console.log(elementData.current.value);

   }

   useEffect(()=> {

    elementData.current.focus();
   })

  return (
    <div>

        <input type="text"  ref={elementData} />

        <button type="button" onClick={myData}>Save </button>

    </div>
  )
}
