import "./Formvideo.css";
import { useEffect, useState } from "react";
const intial={
    bgcolor:"orange",
    time:"1year ago",
    channel:"PranjaL7",
    title:"",
    views:""
}
function Formvideo({/*vidAdder,updateVid,*/dispatch,us_editVid})
{
    const [vid,nextvid]=useState(intial)
    function handleSubmit(e)
    {
     e.stopPropagation();
        e.preventDefault();
        if(us_editVid!==null)
        // updateVid(vid)
        dispatch({type:"UPDATE",payload:vid})
        else
        {
        // vidAdder(vid)
        dispatch({type:"ADD",payload:vid})
        }
       nextvid(intial)
    }
    useEffect(()=>{
        if(us_editVid !== null)
        {
            nextvid(us_editVid)
        }
    },[us_editVid])
    function handleClick(e)
    {
       
        nextvid({...vid,
            [e.target.name]:e.target.value,

        })
        console.log(vid)
    }

    return(
        <>
        <form>
            <input type="text" name="title" onChange={handleClick} value={vid.title} placeholder="title"/>
            <input type="text" name="views" onChange={handleClick} value={vid.views} placeholder="views"/>
            <button onClick={handleSubmit}>{us_editVid ?"Edit":"Add"}</button>
        </form>
      </>
    )
}

export default Formvideo;


// {newVid([...ob,{
//   id:ob.len,
//     bgcolor:"green",
//     title:"Mongo DB",
//     views:"7B",
//     time:"9 months ago",
//     photo:3,
//     flag:false
//   }])}