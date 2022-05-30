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

 const deleMyData= (myindex) => {

   var myData = array.filter((value,index) => {
      if(myindex != index)
      {
         return value
      }
   })

 }

 const handleRemove = React.useCallback(
   (id) => { 

      var myData = array.filter((value,index) => {
         if(index != id)
         {
            return value
         }
      });

      setArray(myData)


    },
   [array]
 );

  return (
    <div>

            <input type="text" value={data}  onChange={setmyData}/>
            <button type="button" onClick={handleRemove}>Save</button>


            <MyDisplayItem data={array}  />

    </div>
  )
}
