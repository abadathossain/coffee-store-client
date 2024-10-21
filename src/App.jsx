
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const loadedCoffee=useLoaderData()

  return (
    <>
      
      <h1 className='bg-slate-400'>Coffe Store Client:{loadedCoffee.length}</h1>
     
    </>
  )
}

export default App
