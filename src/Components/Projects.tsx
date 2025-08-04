import "./css/Card.css";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects" className="mb-25 min-h-[90dvh] pt-[70px]">
      <div className="mb-2 py-5">
        <h2 className="w-[100%] text-center text-4xl font-bold text-gray-400">
          <span className="text-[#0091FF]">Personal </span>Projects
        </h2>
      </div>

      <div className="m-auto flex w-[90%] flex-wrap items-center justify-center gap-5">
        {/* PDF COMPRESSOR */}
        {/* <Card
          status={"Completed"}
          name={"🎓 PDF_Compressor"}
          description={
            "An offline PDF_Compressor - Compress Like a Pro! Added Flask-based PDF compression tool with UI, quality control & download module"
          }
          techStack={["Python", "Flask"]}
          liveLink={"https://pdf-compressor-8v8j.onrender.com/"}
          code={"https://github.com/M-Salman-khan/PDF_Compressor"}
          imgsrc="/img/Projects/PDF_Compressor.png"
        /> */}

        {/* Med Guardian */}
        <Card
          name="💊 MedGuardian"
          description="Med Guardian Buddy is a smart medicine reminder and tracking app
            that helps users stay on schedule with their medications."
          techStack={[
            "Javascript",
            "TypeScript",
            "React",
            "MERN",
            "TailwindCSS",
          ]}
          liveLink="https://med-guardian-buddy.vercel.app/"
          code="https://github.com/M-Salman-khan/Med_Reminder"
          status="Completed"
          imgsrc="/img/Projects/MedGuard.png"
        />

        {/* Flamingo */}
        <Card
          name="🛍 Flamingo - E-Commerce"
          description="Flamingo is a sleek and modern clothing e-commerce web app developed
            using React and Vite."
          techStack={["Javascript", "React", "TailwindCSS", "MERN"]}
          code="https://github.com/M-Salman-khan/Flamingo"
          status="Ongoing"
          imgsrc="/img/Projects/Flamingo.png"
        />


        {/* Chat Bot */}
        <Card
          name="֎ AI Chat Assistant"
          description="A simple and clean front-end for an AI-powered chatbot that connects to the Google Gemini API and talk."
          techStack={["HTML", "CSS3","Javascript",  "API"]}
          code="https://github.com/M-Salman-khan/GEMINI_ChatBot"
          status="Completed"
          imgsrc="/img/Projects/ChatBot.png"
        />
      </div>
    </div>
  );
};

export default Projects;
