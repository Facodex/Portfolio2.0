import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import { MenuMobile } from './components/MenuMobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MenuMobile/>

      <Sidebar/>

      <Main/>
    </div>
  )
}

export default App
