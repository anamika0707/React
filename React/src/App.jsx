import { useState } from 'react'
import {createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// step :1 create context
// const UserContext=createContext();

//step2: wrap all the child inside a provider
//step3:pass value
//step4:consumer ke andar jake consume ker lo

// function App() {
 
//    const [user,setUser]=useState({name:"Anamika"});


//   return (

   
//     <>
//     <UserContext.Provider value={user}>
//       <ChildA/>
//     </UserContext.Provider>
      
//     </>
//   )
// }

// export default App
// export {UserContext};


//Routing Starts from here for routing install react-router-dom using command npm i react-router-dom
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Report from './components/Report'
import Notfound from './components/Notfound'
const router=createBrowserRouter(
  [  //this array contains all the routes and these routes are inside the curly braces
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div> //ye batata hai ki is path pe konsa page render kerna hai
    },
    { 
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
     },
    
     { 
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      //nested routing
      childre:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-test',
          element:<MockTest/>
        },
        {
          path:'report',
          element:<Report/>
        },
         {
          path:'*' ,//ye random agar hum koi path par ja rhe hai to wo wale case ko handle karega
          element:<Notfound/>
         }
      ]
     },
     //how parameters are passed 
     {
      path:"./student/:id", //:id this is called route parameter and id=something this is called query parameter
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
     }
  ]
);
function App(){ 
  return (
    <div>
       <RouterProvider router={router}/> { /* //ye basically page ko batata hai ki ye sab routes hai in sab ko render kerna hai} */}
    </div>
  )
}

export default App;
