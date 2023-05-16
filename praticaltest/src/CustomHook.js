import React from 'react'
import { useFetch } from './customHooks/useFetch'

export default function CustomHook() {

  const {loading, data} =  useFetch("https://jsonplaceholder.typicode.com/posts")


  console.log(loading);
  console.log(data);

  return (
    <div>
        </div>
  )
}
