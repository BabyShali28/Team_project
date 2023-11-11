import { useState } from "react";
import Form from './form';
import Header from './header';
import { Link } from "react-router-dom";


function Todo1(props){
    
    let [items,item_list]=useState(["mobile","charger","medicine","money"])
    // console.log(todo);
    let del=(item)=>{
      let updatedtodo=items.filter((s)=>s!=item)
      item_list(updatedtodo)
      
    }
    return(
      <>
            <Header/>
            {props.vari.logged_status?<h1>welcome {props.vari.log_name}</h1>:"guest"}

      <table border={1}>
        <tr>
          <td>order</td>
          <td>items_name</td>
          <td>delete</td>
        </tr>
        {
               items.map((i,ind)=>(
        
                <tr>
                  <td>{ind+1}</td>
                  <td>{i}</td>
                  <td><button type="button" onClick={()=>del(i)}>delete</button></td>
                </tr>
                  )
                )
              
        }
  
        </table>
      <Form  set_item={item_list} item={items}/>
      <Link to={`/todo`}>todo</Link>

      </>
      
    )
   
  }
  export default  Todo1;