import React from 'react'

 function MyDisplayItem({data}) {

  console.log("This has been changes")
  return (
    <div>{
        data.map((element)=> {

            return (<div>{element}</div>)
        })
        
    }</div>
  )
}

export default React.memo(MyDisplayItem)
