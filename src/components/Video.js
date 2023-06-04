import "./Video.css"
function Video({bgcolor,title,time,channel,views,id,flag,children,dispatch,editVid})
{
    console.log("Video")
    return (<>
    <div className="container">
        <button onClick={()=>dispatch({type:"DELETE",payload:id})} className="close">X</button>
        <button onClick={()=>editVid(id)} className="edit">Edit</button>
<img src={`https://picsum.photos/id/${id}/300/200`} alt="natural beauty"/> 
<h5 style={{color:bgcolor}}>My {title} components</h5>
<p className="chn">{channel}{flag?"✔️":null}</p>
<p className="tim">{time} <span>.</span> {views}</p>
<div>{children}</div>
</div>
        </>);
}

export default Video