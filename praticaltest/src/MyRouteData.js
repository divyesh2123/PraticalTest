import Home from "./Pages/Home";
import Navigration from "./Navigration";
import Invoice from "./Invoice";
import SentInvoices from "./SentInvoices";
import Contact from "./Pages/Contact";
import MyEData from "./MyEData";
import React, { useEffect } from 'react'

const HomeComponent = React.lazy(() => import('./Pages/Home'));
const NavigrationComponent = React.lazy(() => import('./Navigration'));
const InvoiceComponent = React.lazy(() => import('./Invoice'));
const SentInvoicesComponent = React.lazy(() => import('./SentInvoices'));
const MyEDataComponent = React.lazy(() => import('./MyEData'));
const MyContactComponent = React.lazy(() => import('./Pages/Contact'));
export const AllPages = () => {
   
  let  routes = [
        {
          path: "/",
          element: <HomeComponent />
        
        },
        {
              path: "/topics",
              element: <NavigrationComponent />,
              children: [
                { index: true, element: <InvoiceComponent /> },
                 { path: "send", element: <SentInvoicesComponent /> },
              
               ],
             },
             {
               path: "/myPage/:datat",
               element: <MyEDataComponent />,
            
             },
             {
               path: "/contact",
               element: <MyContactComponent />,
              
             }
       
       
       ];


  return routes;
       

}



  

