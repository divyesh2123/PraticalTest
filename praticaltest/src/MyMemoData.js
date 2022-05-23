import React, { useState } from 'react'
import MyDisplayItem from './MyDisplayItem';

export default function MyMemoData() {

 const [data,setData] =   useState('');

 const [array,setArray] = useState([]);

 const setmyData = (e)=> {

    setData(e.target.value);
 }

 const saveMyData = ()=>
 {
    let myData = [...array,data ];
    setArray(myData);

 }

  return (
    <div>

            <input type="text" value={data}  onChange={setmyData}/>
            <button type="button" onClick={saveMyData}>Save</button>


            <MyDisplayItem data={{array}} />

    </div>
  )
}
