import { Routes, Route } from "react-router-dom"
import ProjectView from "./modules/Project/view/project-view"
import HomeView from "./modules/home/view/home-view"
import AboutView from "./modules/about/view/Aboutview"
import ContactView from "./modules/contact/view/contact-view"


function App() {
  return (
 <Routes>
  <Route path="/" element={<HomeView />}/>
  <Route path="/about" element={<AboutView/>} />
  <Route path="/project" element={<ProjectView/>} />
  <Route path="/contact" element={<ContactView />} />
 </Routes>
  )
}

export default App
