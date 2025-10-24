import gemini from "../../../assets/Gemini.png";
import grocify from "../../../assets/Grocify.png";
import refokus from "../../../assets/Refokus.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Projectsection() {
  const data = [
    {
      id: 1,
      img: gemini,
      name: "Gemini Clone",
      about:
        "A modern AI chat application inspired by Google Gemini, built with React and plain CSS. Supports real-time AI conversations, saved prompts, and a responsive, interactive UI.",
    },
    {
      id: 2,
      img: grocify,
      name: "Grocify",
      about:
        "Built a Multipage Grocery Website using React JS and Tailwind CSS, featuring smooth navigation with React Router DOM, responsive sliders with Swiper JS, and elegant visuals enhanced by React Icons.",
    },
    {
      id: 3,
      img: refokus,
      name: "Refokus Clone",
      about:
        "Frontend A pixel-perfect, fully responsive clone of the Refokus agency website, built with React and Tailwind CSS. Recreated modern animations, smooth transitions, and dynamic layouts to closely match the original design and interactivity",
    },
  ];

  return (
    <section className="py-10 px-5 bg-black">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Here are my top 3 projects</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.about}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
            <CardFooter>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projectsection;
