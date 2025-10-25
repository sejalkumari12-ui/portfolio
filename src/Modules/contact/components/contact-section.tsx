import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center"
    >
  
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-400">
          Let’s Connect 💌
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a project in mind, want to collaborate, or
          just say hi — drop me a message below.
        </p>
      </motion.div>

  
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-lg bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800"
      >
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
          <textarea
            rows={5}
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-all duration-300"
        >
          Send Message ✨
        </motion.button>
      </motion.form>

    
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex space-x-6 mt-10"
      >
        <a
          href="sejalkumari5679@gmail.com"
          target="_blank"
          className="hover:text-pink-400 transition"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/sejalkumari12-ui"
          target="_blank"
          className="hover:text-pink-400 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/sejal-kumari-268116303/"
          target="_blank"
          className="hover:text-pink-400 transition"
        >
          <Linkedin size={28} />
        </a>
       
      </motion.div>
    </section>
  )
}
