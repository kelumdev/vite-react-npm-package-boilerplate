import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
// import { Button } from './components'
import { NewComp }  from './components/NewComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Button label='This is a button' /> */}
      <NewComp label='kelum' />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
    </div>
  )
}

export default App
