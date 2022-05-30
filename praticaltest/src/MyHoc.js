import React from "react";

const MyHoc = (Component) => ({...props}) => (
    <div>
     <header>This is header</header>

      <div style={{ position: "absolute", left: "340px" }}>
        <Component {...props}/>

      
       
      </div>
      
      <footer>This is the footer</footer>
    </div>
  );

export default MyHoc;