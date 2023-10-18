import {useEffect,useState} from 'react'
import axios from 'axios'

function App() {
  const [state,setState]=useState([])
  const getData=()=>{
    console.log("server_roure",process.env.REACT_APP_SERVER_ROUTE)
   axios.get(`${process.env.REACT_APP_SERVER_ROUTE}/test-array`)
   .then((res)=>{
      console.log("res",res)
   })
   .catch((err)=>{
    console.log(err)
   })
  }

  useEffect(()=>{
    getData();
  },[state])

  return (
    <div className="App">
     <h1>checking env file----{process.env.REACT_APP_CHAD}</h1>
    </div>
  );
}

export default App;
