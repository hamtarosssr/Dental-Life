import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx"
const MyRoute = ()=>{
    return (
        <Router>
            <Routes>
                <Route path ="/" element = {<App />}/>    
            </Routes>
        </Router>
    )
}

export default MyRoute