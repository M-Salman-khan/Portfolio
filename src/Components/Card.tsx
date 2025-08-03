import "./css/Card.css";
import { Badge } from "@/Components/ui/badge"
interface CardProps{
    name:string,
    description:string,
    status:string,
    code?:string,
    liveLink?:string,
    imgsrc:string,
    techStack:string[]

}
const Card:React.FC<CardProps> = (props:CardProps) => {
  return (
    <div className="rounded-md border border-sky-500/20 hover:[box-shadow:0_0_30px_#0ea5e9] bg-black/60 backdrop-blur-sm transition-all duration-[600ms] hover:scale-105 hover:transform  md:w-[400px]">
          <div className=" flex h-45 items-center justify-center bg-sky-500/10 rounded-t-sm overflow-hidden">
            <img src={props.imgsrc} alt="PDF_Compressor" className="w-full h-auto object-cover"/>
          </div>
          <div className="px-4 py-5 pb-7">

          <Badge  variant={"default"} className="border-1 border-gray-800 absolute top-[20px]" >{props.status}</Badge>
          <h4 className="mb-3 text-xl font-bold text-white">
            {props.name}
          </h4>
          <p className="text-gray-300">
            {props.description}
          </p>
          <div className="tags mb-3 text-gray-200 font-bold">     
            {props.techStack.map((technology)=>(
                <span key={technology}>{technology}</span>
            ))}
            </div>
          <div className="mt-2 gap-4">
            {props.liveLink?
                <a href={props.liveLink} target="_blank"
                className="my-2 mr-3 rounded-sm border-1 border-sky-800/60 px-4 py-2 text-white transition duration-[350ms] hover:cursor-pointer hover:bg-sky-600">
                Live link
                </a>:
                <a
                className="my-2 mr-3 rounded-sm border-1 border-sky-800/60 px-4 py-2 text-white transition duration-[350ms] hover:cursor-pointer hover:bg-sky-600"
                >
                Live link is not available
                </a>
            }
            <a
              href={props.code}
              target="_blank"
              className="mr-3 rounded-sm border-1 border-gray-700 px-4 py-2 text-white transition duration-[350ms] hover:cursor-pointer hover:bg-gray-900/80"
            >
                Github Repo
            </a>
          </div>
        </div>
        </div>
  )
}

export default Card