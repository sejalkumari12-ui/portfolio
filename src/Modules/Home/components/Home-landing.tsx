import { SplineScene } from "@/components/ui/splite"
import { Link } from "react-router-dom"

export default function HomeLanding() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
      {/* Left Side - Text Content */}
      <div className="flex-1 flex flex-col justify-center space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello, <br />
          <span className="text-blue-400">Welcome to my website</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-md">
          I’m <span className="font-semibold text-blue-300">Sejal</span> — a
          passionate Junior Software Developer who loves creating modern,
          interactive, and user-friendly web experiences using React,
          TypeScript, and Tailwind CSS.
        </p>

        <Link to="/project" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-fit transition duration-300 shadow-lg">
          View My Projects
        </Link>
      </div>

      {/* Right Side - Large 3D Spline Scene */}
      <div className="flex-1 relative h-[70vh] md:h-screen w-full">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}


