import React from 'react'

const ChildComponent=React.memo(
    (props)=>{
        console.log("child component got rerendered");
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
);
export default ChildComponent
//agr hum React.memo ke andar wrap ker dete hai component ko to component rerender tabhi hoga jab props change hoenge nhi to rerender nhi hoga
//React.memo ki ye limitation hai ki jab tak hum value bhej rhe the tab tak wo re-render hone se bacha le rha tha lekin jab function pass ho rha hai to nhi rok paa rha hai