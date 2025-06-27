import React from 'react'
import Home from './Home'
import Dashboar from './Dashboard'
import About from './About'
import ParamComp from './ParamComp'
import {Link,NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar=()=>{
    return (
        <div>
            <ul>
                {/* //hume anchor tag ki jagah link tag ka use isliye kiya hai kyuki anchor tag pura page load kerta hai joki hum nhi chahte */}

                {/* // hum link tag ka use na kerke navlink ka use isliye ker rhe hai kyuki hum isme styling aur easily ker skte hai due presence of active class in it */}
                <li><NavLink to="/"className={({isActive})=>isActive?"active-link":""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>About</NavLink></li>
                <li><NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":""}>Dashboard</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;