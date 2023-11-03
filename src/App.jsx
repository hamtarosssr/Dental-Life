import React, { useState } from "react"
import "./App.css"
import Nav from "./components/Navbar"
import ApModal from "./components/pages/ApModal"
//Component
function App(){
  const [Modalstate,setModalstate] = useState(false)

  
  return(
    <div>
      {Modalstate&&<ApModal setOpenModal={setModalstate}/>}
      <Nav modalOpen={setModalstate}/>
    </div>
  )
}
export default App