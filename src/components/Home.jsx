import {Link} from "react-router-dom"


function Home() {
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-300 to-white dark:from-gray-600 dark:to-gray-800">
      <header className="min-h-[35vh] flex items-center justify-center ">
      <div className="text-center max-w-3xl p-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 dark:text-gray-300">Aakash Kumar Srivastava</h1>
        <p className="text-2xl min-h-[11vh] font-bold md:text-xl  bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-300 bg-clip-text text-transparent mb-9">Frontend Developer    • React Developer </p>
        <a href="https://drive.google.com/file/d/16ZOX-3D2mX-QuXXy620KQjKlZfAXXGW_/view?usp=drive_link" className="hover:scale-105 transform transition inline-block w-35 h-10 m-13 px-6 py-3 rounded-3xl shadow bg-gradient-to-r from-indigo-500 to-pink-500 text-white ">My Resume</a>
        <a href="/Project" className="hover:scale-105 transform transition inline-block w-35 h-10 m-13 px-6 py-3 rounded-3xl shadow bg-gradient-to-r from-indigo-500 to-pink-500 text-white ">My Project</a>
      </div>
    </header>
     <section className="min-h-[11vh] mx-auto px-6 py-12">
       <h2 className="text-3xl font-bold  pl-3 bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent mb-9">About Me</h2>
       <div className="flex justify-center">
        <div className="   ml-6 text-wrap max-w-6xl">
          <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-200 ">
            "Hi, I’m <span className="font-semibold text-indigo-500">Aakash Kumar Srivastava 👋</span>, 
            a passionate <span className="font-semibold">Frontend Developer</span> from Varanasi. 
            I specialize in <span className="text-pink-500 font-semibold">ReactJS</span>, 
            <span className="text-indigo-500 font-semibold"> Tailwind CSS</span>,  
            <span className="text-purple-500 font-semibold"> JavaScript</span>,
            <span className="text-purple-500 font-semibold"> CSS</span>,
            <span className="text-purple-500 font-semibold"> HTML</span>,
            <span className="text-purple-500 font-semibold"> Redux</span>,
            <span className="text-purple-500 font-semibold"> Framer motion</span> and
            <span className="text-purple-500 font-semibold"> SQL</span>. 
            I love building responsive, user-friendly, and visually appealing web applications and that combine clean code with modern UI/UX design.I completed my BCA in 2024, and also hold a diploma in Electrical Engineering.
            During my time as a Tech Support Executive, I developed strong problem-solving and communication skills, which now help me in understanding user needs and delivering better digital experiences 
            My focus is always on clean code, modern UI, and seamless user experience.
            I’m passionate about creating impactful web projects, learning new technologies, and aiming to grow into a full-stack developer in the future.
          </p>
        </div>
       </div>
     </section>
      <br />
      
      <br />
      <div className="" >
        <ul className="flex justify-center gap-6">
          <li><Link to="https://github.com/Aakashoptimusstark"><img className="hover:scale-125 transform transition inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 " src="\github.png" alt="GitHub" /></Link></li>
          <li><Link to="https://www.linkedin.com/in/aakash-srivastava-580b50330/"><img className="hover:scale-125 transform transition inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 " src="\linkedin.png" alt="Linkedin" /></Link></li>
          <li><Link to="https://x.com/@AakashSriv62244"><img className="hover:scale-125 transform transition inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 " src="\x.png" alt="twitter" /></Link></li>
        </ul>
      </div>
    
      
    </div>
  )
}

export default Home
