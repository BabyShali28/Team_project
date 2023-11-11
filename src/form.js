import { useState } from "react";
function Form(props){
 
    let [todo,todoadd]=useState("") 
      
    return(
    <>
   
    <input id="box" onKeyUp={(e)=>todoadd(e.target.value)}></input>
    <button type="button" onClick={()=>props.set_item([...props.item,todo])}>Add</button>
    </>
    )

    
}
export default Form;