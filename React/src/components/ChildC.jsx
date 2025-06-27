import React from 'react'
import { UserContext } from '../App';

const ChildC=()=>{
    const user=userContext(UserContext);
    return (
        <div>
            {user.name}
        </div>
    )
}

export default ChildC;
