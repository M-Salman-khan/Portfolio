import "./css/Card.css";
import { Badge } from "@/Components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface CardProps {
  name: string;
  description: string;
  status: string;
  code?: string;
  liveLink?: string;
  imgsrc: string;
  techStack: string[];
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="rounded-md border border-sky-500/20 bg-black/60 backdrop-blur-sm transition-all duration-[600ms] hover:scale-105 hover:transform hover:[box-shadow:0_0_30px_#0ea5e9] md:w-[420px]">
      <div className="flex h-45 items-center justify-center overflow-hidden rounded-t-sm bg-sky-500/10">
        <img
          src={props.imgsrc}
          alt={props.name}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="px-4 py-5 pb-7">
        <Badge
          variant={"default"}
          className="absolute top-[20px] border-1 border-gray-800"
        >
          {props.status}
        </Badge>
        <h4 className="mb-3 text-xl font-bold text-white">{props.name}</h4>
        <p className="text-gray-300">{props.description}</p>
        <div className="tags mb-3 font-bold text-gray-200">
          {props.techStack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {props.code ? (
            <a
              href={props.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border border-gray-700 px-4 py-2 text-white transition duration-300 hover:bg-gray-900/80"
            >
              <FaGithub />
              <span>GitHub Repo</span>
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-2 rounded-sm border border-gray-700 px-4 py-2 text-white opacity-60">
              Github Link not available
            </span>
          )}
          {props.liveLink ? (
            <a
              href={props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border border-sky-800/60 px-4 py-2 text-white transition duration-300 hover:cursor-pointer hover:bg-sky-600"
            >
              <FiExternalLink />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-2 rounded-sm border border-sky-800/60 px-4 py-2 text-white opacity-60">
              Link not available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
