import React, { useEffect, useState } from 'react'

function Product() {
     const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json))
    },[])
  return (
    <>
      <div className=" cardsCss mt-5">
      <div className="row">
      {
           data?.map((value)=>{
              return (
                  <>
                      <div className="col-lg-3 col-md-3 col-6">
                          <div className="card mb-3 text-center text-justify">
                              <img src={value.image} className="card-img-top" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title">{value.title}</h5>
                                      <p className="card-text">{value.description}</p>
                                      <a href="#" className="btn btn-primary text-wrap">Go somewhere</a>
                                  </div>
                          </div>

                      </div>
                  </>
              )
           })
       }
              </div>
      </div>
    
    </>
  )
}

export default Product