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
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink
} from "react-router-dom";
import ContactData from './ContactData';
import HeaderData from './HeaderData';
import FooterData from './FooterData';
import Navigration from './Navigration';
import Invoice from './Invoice';
import SentInvoices from './SentInvoices';
import MyEData from './MyEData';
import CustComLink from './CustComLink';
import {AllPages}  from './MyRouteData';

function App() {

  useEffect(()=> {

    autoFetch.get("/accounts").then(y=> {

      console.log(y)
    })
  },[])

 
  const myroutes = useRoutes(AllPages());


  return (
   <>




    <HeaderData></HeaderData>

    
    <ul>
       
          <li>ngg
            <Link to='/'>Home</Link>
          </li>
          <li>
            

            <CustComLink to='/contact'>Contact</CustComLink>
          </li>

          <li>
            <Link to='/invoices'>Invoices</Link>
          </li>

          <li>
          <NavLink
            to="/myPage/1"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: 'red' }
            }
          >MyPage
            </NavLink>
          </li>
       
      </ul>

    

      {myroutes}
{/* 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/myPage/:datat'  element={<MyEData/>}/>
      <Route  path='/contact'  element={<ContactData />} />
      <Route path="invoices" element={<Navigration />}>
        <Route index  element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
     
    </Routes> */}

    

    
    


    <FooterData></FooterData>

  
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
 
        
   
   </>
  )
}

export default App 