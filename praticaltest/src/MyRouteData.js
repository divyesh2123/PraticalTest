import Home from "./Pages/Home";
import Navigration from "./Navigration";
import Invoice from "./Invoice";
import SentInvoices from "./SentInvoices";
import Contact from "./Pages/Contact";
import MyEData from "./MyEData";

export const AllPages = () => {
   
  let  routes = [
        {
          path: "/",
          element: <Home />
        
        },
        {
              path: "/topics",
              element: <Navigration />,
              children: [
                { index: true, element: <Invoice /> },
                 { path: "send", element: <SentInvoices /> },
              
               ],
             },
             {
               path: "/myPage/:datat",
               element: <MyEData />,
            
             },
             {
               path: "/contact",
               element: <Contact />,
              
             }
       
       
       ];


       return routes;
       

}



  

