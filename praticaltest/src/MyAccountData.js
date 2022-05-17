import React, { useEffect, useState } from 'react'
import axios from 'axios';
import authFetch from './axiosbase/interceptors';

export default function MyAccountData() {

    const [data,setData] =useState([]);

     const fetchData = async ()=> {

      const mydata = await  authFetch.get("http://localhost:4000/accounts");

      console.log(mydata);
      
      setData(mydata.data);

     }

    useEffect(()=> {
        fetchData();

    },[])


  return (

    <div>
        {
            data.map((element)=> {
                return(<div>{element.title}</div>)
            })


        }

    </div>
  )
}
