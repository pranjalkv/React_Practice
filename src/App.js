
import Button from './components/PButton.js'
import './App.css';
import Video from './components/Video.js'
import int_ob from './data/data.js'
import Counter from "./components/Counter.js"
import { useReducer, useState } from 'react';
import Formvideo from "./components/Formvideo.js"

function App() {

  const [us_editVid,editedVid]=useState(null)
    const [ob,dispatch]=useReducer(reducer,int_ob)
  // const [ob,newVid]=useState(int_ob);


  // function add(a)
  // {
  //   dispatch({type:"ADD",payload:a})
  //   // newVid([...ob,{...a,id:ob.length+5}])
  // }
  //  function adeleteVid(id)
  //  {
  //   dispatch({type:"DELETE",payload:id})
  //   //  newVid(ob.filter((ele)=>ele.id!==id))
  //  }
  function aeditVideo(id)
  {
    editedVid(ob.find((ele)=>ele.id===id))
  }
  // function fnupdateVid(a)
  // {
  //   dispatch({type:"UPDATE",payload:a})
  //   // const index=ob.findIndex((ele=>ele.id===a.id))
  //   // const newUpdate=[...ob]
  //   // newUpdate.splice(index,1,a)
  //   // newVid(newUpdate);
  //   // editedVid(null)
  // }
  function reducer(ob,action)
  {
    switch(action.type)
    {
      case "ADD":
      return(
        [...ob,{...action.payload,id:ob.length+5}]
      )
      case "DELETE":
        return(
          (ob.filter((ele)=>ele.id!==action.payload))
        )
        case "UPDATE":
      
             const index=ob.findIndex((ele=>ele.id===action.payload.id))
       const newUpdate=[...ob]
       newUpdate.splice(index,1,action.payload)
               editedVid(null)
       return newUpdate;
    }
  }
  console.log("App")
    return (
    <>
    <Formvideo /*vidAdder={add}*/ dispatch={dispatch} us_editVid={us_editVid} /*updateVid={fnupdateVid}*/></Formvideo>
      <header onClick={()=>console.log("head")}>
        {
        ob.map(ele=> <Video key={ele.id}
          title={ele.title}
        views={ele.views}
          time={ele.time}
          flag={ele.flag}
            bgcolor={ele.bgcolor}
            channel={ele.channel}
            id={ele.id}
            dispatch={dispatch}
            // deleteprop={adeleteVid}
            editVid={aeditVideo}>
              <Button onPlay={()=>console.log("paused",ele.title)} onPause={()=>console.log("playing")}>Play {ele.title}</Button>
          </Video>
)}
      </header>
      <div>
        {/* <Button onPlay={()=>console.log("paused")} onPause={()=>alert("playing")}>Play</Button> */}
        {/* <Button onTouch={()=>console.log("playing")}>Pause</Button> */}
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
