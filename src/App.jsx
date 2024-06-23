
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Shared/Navbar/Navbar'
import UseAuth from './Hooks/UseAuth/UseAuth'

function App() {
const {user , loading} = UseAuth()
if(!loading) return <h2>Loading.......</h2>
console.log(user , loading)
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
