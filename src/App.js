// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import NewCom from './newComp';
// import { useState ,useEffect} from 'react';
// import Todo1 from './todo';
// import User from './todo/users';
// import Fromm from './login';


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



// function App() {
  
  // let [isLogged, setislogged] = useState({
  //   logged_status: false,
  //   log_name: ""
  // });

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <User />,
  //   }

  // ]);

  // useEffect(()=>{
    
  // })
  // return (
  //   <>
//       <RouterProvider router={router} />

//     </>
//   )

// }
// export default App;


import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);