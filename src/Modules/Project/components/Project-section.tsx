import { motion } from "framer-motion"
import gemini from "../../../assets/Gemini.png"
import grocify from "../../../assets/Grocify.png"
import refokus from "../../../assets/Refokus.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HomeNavbar from "@/modules/home/components/home-navbar"

export default function ProjectSection() {
  const data = [
    {
      id: 1,
      img: gemini,
      name: "Gemini Clone",
      about:
        "A modern AI chat app inspired by Google Gemini — built with React and CSS. Features real-time AI chat, saved prompts, and a responsive, interactive UI.",
      link: "https://gemini-clone-pi-black.vercel.app/",
    },
    {
      id: 2,
      img: grocify,
      name: "Grocify",
      about:
        "A multipage grocery website built with React JS & Tailwind CSS. Includes smooth navigation (React Router DOM), responsive sliders (Swiper JS), and icons (React Icons).",
      link: "https://grocery-website-sage.vercel.app/",
    },
    {
      id: 3,
      img: refokus,
      name: "Refokus Clone",
      about:
        "A pixel-perfect, fully responsive clone of the Refokus agency site — built using React and Tailwind CSS with smooth animations and dynamic layouts.",
      link: "https://refokus-clone-13p6z0lc9-sejal-kumari-s-projects.vercel.app/",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 px-6 md:px-16">
      <HomeNavbar />
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
           My Featured Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          A showcase of my favorite projects — blending creativity, code, and design to build
          modern digital experiences.
        </motion.p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 transition-all duration-500 shadow-lg hover:shadow-pink-500/10 rounded-2xl overflow-hidden flex flex-col h-full">
              
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-semibold mb-2 text-pink-400">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  {project.about}
                </CardDescription>
              </CardHeader>

              <CardContent className="grow"></CardContent>

              <CardFooter className="p-6 border-t border-zinc-800">
                <a
                  href={project.link}
                  className="text-pink-400 font-medium hover:text-pink-300 transition-all duration-300"
                >
                  View Project →
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
