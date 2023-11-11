import { useState,useEffect } from "react";
import Form from '../form';
import axios from 'axios';

import Header from '../header'
function User(){
    
   

    let [timer,setvalue]=useState(0);
    let[isTimeStart,setisTimeStart]=useState(true)
      useEffect(()=>{
            if(isTimeStart){
              setvalue(timer+1);
            }
        
   },[timer,isTimeStart])

    
    return(
      <>


        <code>{timer}</code>
        <button type="button" onClick={()=>setisTimeStart(!isTimeStart)}>{isTimeStart?"stop":"start"}</button>
        <button type="button" onClick={async()=>{await setisTimeStart(false);setvalue(0)}}>reset</button>
        
      </>
      
    )
   
  }
  export default  User;