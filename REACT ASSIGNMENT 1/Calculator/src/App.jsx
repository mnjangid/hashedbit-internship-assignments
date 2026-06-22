import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function sum(){
    return setResult(Number(num1)+Number(num2));
  }

  function sub(){
    return setResult(Number(num1)-Number(num2));
  }

  function mul(){
    return setResult(Number(num1)*Number(num2));
  } 

  function div(){
    if(num2==0) return "Division by 0 is not allowed"
    return setResult(Number(num1)/Number(num2));
  }
  return (
    <div style={{margin:"100px", padding:"100px"}}>
      <div><h2>CALCULATOR</h2></div>
      <input type="number" placeholder='Enter first no.' value={num1} onChange={(e)=>setNum1(e.target.value)} /><br></br>
      <input type="number" placeholder='Enter second no.' value={num2} onChange={(e)=>setNum2(e.target.value)} /><br></br><br></br>
      <button style={{height:"50px", width:"50px", margin:"5px"}} onClick={sum}>ADD</button>
      <button style={{height:"50px", width:"50px", margin:"5px"}} onClick={sub}>SUB</button><br></br>
      <button style={{height:"50px", width:"50px", margin:"5px"}} onClick={mul}>MUL</button>
      <button style={{height:"50px", width:"50px", margin:"5px"}} onClick={div}>DIV</button><br></br>
      <div>
        <h3>RESULT: {result}</h3>
      </div>
    </div>
  )
}

export default App
