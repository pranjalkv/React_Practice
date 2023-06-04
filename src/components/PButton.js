import { useState } from "react";
import "./PButton.css"

function Button({onPlay,onPause,children})
{
  console.log("xButton")
 const [playing,change]=useState(true)
  function chkPlay(e)
  {
    e.stopPropagation();
    if(playing)
    onPause();
    else
    onPlay();
    change(!playing)
  }
    return(
        <button className="btn" onClick={chkPlay}>{children} {playing?"▶️":"⏸"}</button>
    )
}

export default Button;