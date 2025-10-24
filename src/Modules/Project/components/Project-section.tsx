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

export default function ProjectSection() {
  const data = [
    {
      id: 1,
      img: gemini,
      name: "Gemini Clone",
      about:
        "A modern AI chat application inspired by Google Gemini, built with React and CSS. Supports real-time AI conversations, saved prompts, and a responsive, interactive UI.",
    },
    {
      id: 2,
      img: grocify,
      name: "Grocify",
      about:
        "A multipage grocery website built with React JS and Tailwind CSS. Features smooth navigation (React Router DOM), responsive sliders (Swiper JS), and elegant visuals (React Icons).",
    },
    {
      id: 3,
      img: refokus,
      name: "Refokus Clone",
      about:
        "A pixel-perfect, fully responsive clone of the Refokus agency website built with React and Tailwind CSS. Includes smooth animations and dynamic layouts matching the original site.",
    },
  ];

  return (
    <section className="py-10 px-5 bg-black text-white">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Here are my Top 3 Projects</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow bg-gray-900 border border-gray-700">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription className="text-gray-400">{project.about}</CardDescription>
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
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
