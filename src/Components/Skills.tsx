import React from 'react'
import { Button } from "@/Components/ui/button"
import {IconCloud} from './magicui/icon-cloud'
import {AuroraText} from './Shadcn-Component/AuraText'
const Skills= () => {
  const slugs = [
    "typescript",
    "javascript",
    "c++",
    "c",
    "react",
    "tailwindcss",
    "python",
    "mysql",
    "html5",
    "mongodb",
    "css",
    "nodedotjs",
    "express",
    "firebase",
    "git",
    "github",
];
  return (
  <div id="skills" className='mb-30 relative md:pt-20'>
    <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud images={slugs.map(slug=>`https://cdn.simpleicons.org/${slug}/${slug}`)}/>
    </div>
    <div className='flex items-center justify-center w-80% m-auto flex-col relative'>
      <p className='text-gray-400 mb-5 text-sm absolute top-[-50px]'>MY SKILLS</p>
      <span className='font-bold text-5xl'>The Secret <AuroraText className='font-nyght'>Sauce</AuroraText></span>
    </div>
    <div>
      <div className='pt-[50px]'>
        <div className='flex flex-wrap w-[70%] m-auto justify-center'>
    {slugs.map((slug)=>(
        <Button variant={"outline"} className='bg-[#212121] border-1 m-2 border-[#454545] rounded-md px-3 py-1 flex gap-2 items-center justify-around' key={slug}>
          <img src={`https://cdn.simpleicons.org/${slug}`} alt={slug} width={15} height={15} />{slug}
        </Button>
    ))}
    </div>
      </div>
    </div>
    </div>
  )
}

export default Skills