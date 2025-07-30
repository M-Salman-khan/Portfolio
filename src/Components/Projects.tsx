const Projects = () => {
  return (
    <div id="projects" className="mb-20 min-h-[90dvh]">
      <div className="py-5 mb-2">
        <h2 className="w-[100%] text-center text-4xl font-bold">Projects</h2>
      </div>
      <div className="m-auto flex w-[90%] flex-wrap items-center justify-center gap-5">
        <div className="md:w-[400px] rounded-md border border-sky-500/20 bg-black/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-sky-500/40">
          <div className="mb-4 flex h-45 items-center justify-center bg-sky-500/10">
            {/* <FaCss3Alt className="h-6 w-6 text-sky-500"/> */}
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">CSS3</h4>
          <p className="text-gray-300">
            Style and layout web pages with modern, responsive designs.
          </p>
          <div className="mt-6 gap-4">
            <button className="rounded-sm mr-3 bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-600 hover:cursor-pointer">
              Live link
            </button>
            <button className="rounded-sm mr-3 bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800 hover:cursor-pointer">
              Github Repo
            </button>
          </div>
        </div>

        <div className="md:w-[400px] rounded-md border border-sky-500/20 bg-black/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-sky-500/40">
          <div className="mb-4 flex h-45 items-center justify-center bg-sky-500/10">
            {/* <FaCss3Alt className="h-6 w-6 text-sky-500"/> */}
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">CSS3</h4>
          <p className="text-gray-300">
            Style and layout web pages with modern, responsive designs.
          </p>
          <div className="mt-6 gap-4">
            <button className="rounded-sm mr-3 bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-600 hover:cursor-pointer">
              Live link
            </button>
            <button className="rounded-sm mr-3 bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800 hover:cursor-pointer">
              Github Repo
            </button>
          </div>
        </div>

        <div className="md:w-[400px] rounded-md border border-sky-500/20 bg-black/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-sky-500/40">
          <div className="mb-4 flex h-45 items-center justify-center bg-sky-500/10">
            {/* <FaCss3Alt className="h-6 w-6 text-sky-500"/> */}
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">CSS3</h4>
          <p className="text-gray-300">
            Style and layout web pages with modern, responsive designs.
          </p>
          <div className="mt-6 gap-4">
            <button className="rounded-sm mr-3 bg-sky-500 px-4 py-2 text-white transition hover:bg-sky-600 hover:cursor-pointer">
              Live link
            </button>
            <button className="rounded-sm mr-3 bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800 hover:cursor-pointer">
              Github Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
