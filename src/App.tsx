import { Routes, Route } from "react-router-dom"
import ProjectView from "./modules/Project/view/project-view"
import HomeView from "./modules/home/view/Home-view"
import AboutView from "./modules/about/view/Aboutview"


function App() {
  return (
 <Routes>
  <Route path="/" element={<HomeView />}/>
  <Route path="/about" element={<AboutView/>} />
  <Route path="/project" element={<ProjectView/>} />
 </Routes>
  )
}

export default App
