import { useState } from "react";
import "./Counter.css"

function Counter()
{console.log("Counter")
    const [number,change]=useState(0);
    function cntclick(e)
    {
        e.stopPropagation()
        change(number=>number+1)
        console.log(number)
    }
    return(
        <>
        <h1>{number}</h1>
        <button className="c_btn" onClick={cntclick}>ADD</button>
        </>
    )
}
export default Counter;