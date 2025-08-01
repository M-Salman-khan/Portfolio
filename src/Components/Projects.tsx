import "./Project.css";
const Projects = () => {
  return (
    <div id="projects" className="mb-20 min-h-[90dvh]">
      <div className="mb-2 py-5">
        <h2 className="w-[100%] text-center text-4xl font-bold">Projects</h2>
      </div>

      {/* PDF COMPRESSOR */}
      <div className="m-auto flex w-[90%] flex-wrap items-center justify-center gap-5">
        <div className="rounded-md border border-sky-500/20 bg-black/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-sky-500/40 md:w-[400px]">
          <div className="mb-4 flex h-45 items-center justify-center bg-sky-500/10">
            <img src="/img/Projects/PDF_Compressor.png" alt="PDF_Compressor" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">
            🎓 PDF_Compressor
          </h4>
          <p className="text-gray-300">
            An offline PDF_Compressor - Compress Like a Pro! Added Flask-based
            PDF compression tool with UI, quality control & download module
          </p>
          <div className="tags mt-1">
            <span>Python</span>
            <span>Flask</span>
          </div>
          <div className="mt-2 gap-4">
            <a href="https://pdf-compressor-8v8j.onrender.com/" target="_blank">
              <button className="my-2 mr-3 rounded-sm bg-sky-500 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-sky-600">
                Live link
              </button>
            </a>
            <a
              href="https://github.com/M-Salman-khan/PDF_Compressor"
              target="_blank"
            >
              <button className="mr-3 rounded-sm bg-gray-700 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-gray-800">
                Github Repo
              </button>
            </a>
          </div>
        </div>

        <div className="rounded-md border border-sky-500/20 bg-black/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-sky-500/40 md:w-[400px]">
          <div className="mb-4 flex h-45 items-center justify-center bg-sky-500/10">
            <img src="/img/Projects/MedGuard.png" alt="MedGuardian" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">💊 MedGuardian</h4>
          <p className="text-gray-300">
            Med Guardian Buddy is a smart medicine reminder and tracking app
            that helps users stay on schedule with their medications.
          </p>
          <div className="tags mt-1">
            <span>Javascript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>MERN</span>
            <span>TailwindCSS</span>
          </div>
          <div className="mt-2 gap-4">
            <a href="https://med-guardian-buddy.vercel.app/" target="_blank">
              <button className="my-2 mr-3 rounded-sm bg-sky-500 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-sky-600">
                Live link
              </button>
            </a>
            <a
              href="https://github.com/M-Salman-khan/Med_Reminder"
              target="_blank"
            >
              <button className="mr-3 rounded-sm bg-gray-700 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-gray-800">
                Github Repo
              </button>
            </a>
          </div>
        </div>

        <div className="rounded-md border border-sky-500/20 bg-black/60 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-sky-500/40 md:w-[400px]">
          <div className="mb-4 flex h-45 items-center justify-center bg-sky-500/10">
            <img src="/img/Projects/Flamingo.png" alt="Flamingo" />
          </div>
          <h4 className="mb-3 text-xl font-bold text-white">
            🛍 Flamingo - E-Commerce
          </h4>
          <p className="text-gray-300">
            Flamingo is a sleek and modern clothing e-commerce web app developed
            using React and Vite.
          </p>
          <div className="tags mt-1">
            <span>Javascript</span>
            <span>React</span>
            <span>MERN</span>
            <span>TailwindCSS</span>
          </div>
          <div className="mt-2 gap-4">
            <button
              className="my-2 mr-3 rounded-sm bg-sky-500 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-sky-600"
              disabled
            >
              Live link is not available
            </button>
            <a href="https://github.com/M-Salman-khan/Flamingo" target="_blank">
              <button className="mr-3 rounded-sm bg-gray-700 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-gray-800">
                Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
