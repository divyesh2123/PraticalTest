import React, { useEffect } from 'react'
// import Admin from './Admin'
// import API from './API'
import Header from './Header'
// import Login from './Login'
import { ReactDOM } from 'react';

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Login from './Login'
import autoFetch from './axiosbase/interceptors'

import axios from 'axios';

import Registration from './Pages/Registration';
import MyAccountData from './MyAccountData';
import RegistrationForm from './RegistrationForm';
import FullFormFunction from './FullFormFunction';
import AccountRegistration from './AccountRegistration';
import MyFormWithoutYp from './MyFormWithoutYp';
import FormFunctio from './FormFunctio';
import VideoPlayer from './VideoPlayer';
import MyData from './MyData';
import DynamicForm from './DynamicForm';
import MyUnControllForm from './MyUnControllForm';
import GridExample from './MyDataDisplay';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContactData from './ContactData';
import HeaderData from './HeaderData';
import FooterData from './FooterData';

function App() {

  useEffect(()=> {

    autoFetch.get("/accounts").then(y=> {

      console.log(y)
    })
  },[])


  return (
   <>

<BrowserRouter>

    <HeaderData></HeaderData>

    
    <ul>
       
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
       
      </ul>

    


    <Routes>
      <Route path="/" element={<Home />}/>
      <Route  path='/contact'  element={<ContactData />} />
       
     
    </Routes>


    <FooterData></FooterData>

  </BrowserRouter>
     {/* <Registration></Registration> */}
     {/* <Admin></Admin> */}
     {/* <Login></Login> */}
     {/* <SignIn></SignIn> */}
     {/* <API></API> */}
     {/* <Header></Header> */}
     {/* <BrowserRouter>
     <Routes>
          <Route  path="/" element={<Header/>}/>
          <Route   element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/login" element= {<Login/>}/>
          <Route path="/Registration" element= {<Registration/>}/>
      </Routes>
      </BrowserRouter> */}

      {/* <MyAccountData></MyAccountData> */}

       {/* <AccountRegistration></AccountRegistration> */}

       {/* <FullFormFunction></FullFormFunction> */}

       {/* <MyFormWithoutYp></MyFormWithoutYp> */}

       {/* <FormFunctio></FormFunctio> */}
        {/* <VideoPlayer></VideoPlayer>  */}
       {/* <MyData></MyData> 

       <MyUnControllForm></MyUnControllForm> */}
 
         <GridExample></GridExample> 
   
   </>
  )
}

export default App 