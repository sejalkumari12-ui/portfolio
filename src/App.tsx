import Aboutview from "./Modules/about/view/Aboutview"
import Homeview from "./Modules/Home/view/Home-view"
import { Routes, Route } from "react-router-dom"
import ProjectView from "./Modules/Project/view/ProjectView"


function App() {
  return (
 <Routes>
  <Route path="/" element={<Homeview />}/>
  <Route path="/about" element={<Aboutview/>} />
  <Route path="/project" element={<ProjectView/>} />
 </Routes>
  )
}

export default App
