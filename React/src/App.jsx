import { useState } from 'react'
import {createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// step :1 create context
const UserContext=createContext();

//step2: wrap all the child inside a provider
//step3:pass value
//step4:consumer ke andar jake consume ker lo

function App() {
 
   const [user,setUser]=useState({name:"Anamika"});


  return (

   
    <>
    <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider>
      
    </>
  )
}

export default App
export {UserContext};
