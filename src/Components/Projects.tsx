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

      <div className="m-auto flex w-[90%] flex-wrap items-center justify-between gap-[50px]">
        {/* YouTube Downloader Toolkit */}
        <Card
          status={"Completed"}
          name={"🎥 YouTube Downloader Toolkit"}
          description={
            "A Python-based YouTube Video & Playlist Downloader built with yt-dlp and FFmpeg. Supports multiple qualities 8K, 4K, 1080p, 480p and MP3."
          }
          techStack={["Python", "Flask"]}
          code={"https://github.com/M-Salman-khan/YouTube_Downloader_Toolkit"}
          imgsrc="/img/Projects/Playlist_downloader_toolkit.png"
        />

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
          techStack={["HTML", "CSS3","Javascript",  "Gemini API"]}
          code="https://github.com/M-Salman-khan/GEMINI_ChatBot"
          status="Completed"
          imgsrc="/img/Projects/ChatBot.png"
        />
      </div>
    </div>
  );
};

export default Projects;
