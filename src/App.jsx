import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Introduce from './Introduce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div>
        <img src="./public/carousel@2x.png" />
      </div>
        <h2>New Release</h2>
        
      <div>
        
      </div>
    </div>
  )
}

export default App
