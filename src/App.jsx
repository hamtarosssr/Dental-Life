import React, { useEffect,useState } from "react"
import "./App.css"
import Nav from "./components/Navbar"
import ApModal from "./components/pages/ApModal"
//Component
function App(){
  const [Modalstate,setModalstate] = useState(false)
  useEffect(()=>{console.log(Modalstate)},[Modalstate])
  
  return(
    <div>
      {Modalstate&&<ApModal setOpenModal={setModalstate}/>}
      <Nav modalOpen={setModalstate}/>
    </div>
  )
}
export default App