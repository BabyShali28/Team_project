import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NewCom from './newComp';
import { useState ,useEffect} from 'react';
import Todo1 from './todo';
import User from './todo/users';
import Fromm from './login';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  
  // let [isLogged, setislogged] = useState({
  //   logged_status: false,
  //   log_name: ""
  // });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    }

  ]);

  useEffect(()=>{
    
  })
  return (
    <>
      <RouterProvider router={router} />

    </>
  )

}
export default App;