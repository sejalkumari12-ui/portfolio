import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

 export default function HomeNavbar  () {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white py-4 px-8 flex justify-between items-center shadow-md z-50">
      {/* ---------- Left Side: Logo ---------- */}
      <h1 className="text-2xl font-bold tracking-wide">
        Sejal Kumari<span className="text-blue-400">.</span>
      </h1>

      {/* ---------- Right Side: Navigation Links ---------- */}
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="text-gray-300 hover:text-blue-400 transition">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className="text-gray-300 hover:text-blue-400 transition">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/project" className="text-gray-300 hover:text-blue-400 transition">
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}


