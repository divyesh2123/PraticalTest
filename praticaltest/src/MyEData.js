import React from 'react'
import { useParams } from 'react-router-dom';

export default function MyEData() {

    let params = useParams();

    console.log(params);

  return (
    <div>This is paradata</div>
  )
}
