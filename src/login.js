import { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Fromm(props) {
    const navigate = useNavigate();
    let [loginData, setloginData] = useState({
        email: "shali@gmail.com",
        password: 1234
    })

    // let[isLogged,setislogged]=useState(false)

    // let check=()=>{
    //     if(loginData.email=="shali@gmail.com" && loginData.password==1234)
    //     alert("success")
    //     else
    //     alert("failed")
    // }

    let check = () => {
        // if (loginData.email === "shali@gmail.com" && loginData.password ===1234) {
        //     props.func({
        //         logged_status: true,
        //         log_name: loginData.email

        //     })
        axios({
            method: 'GET',
            url: "http://agaram.academy/api/action.php",
            data: {
                request : "candidate_login",
                email : "shali@gmail.com",
                password : "1234"
            }
          }) .then (function (response){
            console.log(response)
            if (loginData.email === "shali@gmail.com" && loginData.password ===1234) {
                    props.func({
                        logged_status: true,
                        log_name: loginData.email
        
                    })
          }});
            // {JSON.stringify(props.func)}
            // navigate("/todo", { state: { key: "loginData.email" } });
            navigate("/todo");
        }

        // else {
        //     props.func({
        //         logged_status:false,
        //         log_name:""
        //     })
        // }

        
    return (
        <>

            <h1>welcome to our react</h1>
            {JSON.stringify(loginData)}
        
            <form>
                gmail:<input type="email" defaultValue= "shali@gmail.com"onKeyUp={(e) => setloginData({
                    ...loginData, email: e.target.value
                })}></input>

                password:<input type="password" defaultValue="1234" onKeyUp={(e) => setloginData({
                    ...loginData, password: e.target.value
                })}></input>
                <button type="button" onClick={() => check()}>submit</button>
                {/* <button type="button" onClick={()=>toGetData()}>get</button> */}
            </form>
            <Link to={`/todo`}>todo</Link>
        </>
    )
}
export default Fromm;