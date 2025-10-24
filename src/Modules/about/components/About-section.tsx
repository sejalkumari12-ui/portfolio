import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Homenavbar from "@/Modules/Home/components/Home-navbar"
import { motion } from "framer-motion"
import { Code2, Globe, Sparkles } from "lucide-react"

function AboutSection() {
  const skills = [
    {
      icon: <Code2 className="w-10 h-10 text-pink-500" />,
      title: "Frontend Development",
      description:
        "Building beautiful and responsive UIs with React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Backend Logic",
      description:
        "Creating scalable APIs and logic using Node.js and Express.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-yellow-400" />,
      title: "Continuous Learning",
      description:
        "Always exploring new tools and technologies to sharpen my skills.",
    },
  ]

  return (
   
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center py-6 px-4 md:px-16">
       <Homenavbar />
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Hi, I’m <span className="text-pink-500 font-semibold">Sejal</span> — a
          Junior Software Developer passionate about crafting engaging and
          dynamic digital experiences.
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto w-full px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-all duration-300 shadow-lg hover:shadow-pink-500/10 rounded-2xl">
              <CardHeader className="flex flex-col items-center text-center space-y-3">
                {skill.icon}
                <CardTitle className="text-xl font-semibold text-white">
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent />
              <CardFooter>
                <p className="text-sm text-gray-500 mx-auto">✨ Keep growing</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
