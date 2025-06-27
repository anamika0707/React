import React from 'react'
import { Outlet } from 'react-router-dom';

const Dashboard =()=>{
    return (
        <div>
            Dashboard page
            {/* {//agar hum chahte hai ki parent ke children nested routing mein to hum parent mein outlet add karenge*/}
            <Outlet/>
        </div>


    )
}
export default Dashboard;