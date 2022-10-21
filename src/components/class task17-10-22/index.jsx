import { useState } from "react";
import "./index.css"

let Mode=() =>{
    const[lit, setLit]=useState(true)
    return(
        <div className={`room ${(lit)? 'lit':'dark'}`}>
            <button className="tog" onClick={()=>{setLit(!lit)}}>press</button>
        </div>
    )
}

let Counter=() =>{
    const[num, addnum]= useState(0);

    return(
    <div className="main">
     <div className="decrease" onClick={()=>{addnum(num-1)}}>-</div> 
     <div className="display">{num}</div>
     <div className="increase" onClick={()=>{addnum(num+1)}}>+</div>  
     <Mode/>
    </div>
)
    }
    export default Counter;
