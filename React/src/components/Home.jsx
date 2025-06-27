import React from 'react'
import { useNavigate } from 'react-router-dom'; //ye hume help kerta hai ki hum maan lo koi button pe click ker rhe hai to wo dusri page par navigate kara dega

const Home =()=>{
    const navigate=useNavigate();
    function handleClick(){
        navigate('/about'); 
    }
    return (
        <div>
            Home Page
            {/* <button onClick={handleClick}>Move to About Page</button> //is button ko click kerke about page pe navigate ho jayenge */}
        </div>
    )
}
export default Home;