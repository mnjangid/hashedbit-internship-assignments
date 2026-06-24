import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Table} from './components/Table'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
    .then(async function(res){
      const json = await res.json();
      setUsers(json);
    })
  },[])

  return (
    <div>
      <div>IPL SEASON 2022 POINTS TABLE</div>
      <Table users={users}/>
    </div>
  )
}

export default App
