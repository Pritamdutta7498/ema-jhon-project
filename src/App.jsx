import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './componenets/Header/Header'
import Shop from './componenets/Shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Shop/>
 
    </div>
  )
}

export default App
