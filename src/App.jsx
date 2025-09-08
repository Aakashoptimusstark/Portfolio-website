import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import NavBar from "./components/NavBar"
import PageNotFound from "./components/PageNotFound"
import Footer from "./components/Footer"
import DarkModeToggle from "./components/Mode"



function App() {
  

  return (
    <div>
      
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/user">
            <Route path="/user/Contact" element={<Contact />} />
          </Route>
          
          <Route path="/Project" element={<Projects />} />
        </Route>
        
        <Route path="/*" element={<PageNotFound />} />
        
      </Routes>
      <div className="fixed top-16 right-0">
        <DarkModeToggle />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
      
    </div>
  )
}

export default App;

// import { Outlet, Link } from "react-dom";
// import { useState, useEffect } from "react";

// // Dark/Light hook


// export default function App() {
//   const [theme, toggleTheme] = useDarkMode();
//   const [open, setOpen] = useState(false);

//   function useDarkMode() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
// }

//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full z-50 bg-pink-100 dark:bg-gray-800 shadow">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           <Link to="/" className="text-2xl font-bold">
//             Aakash
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link to="/" className="hover:underline">
//               Home
//             </Link>
//             <Link to="/Projects" className="hover:underline">
//               Projects
//             </Link>
//             <Link to="/Contact" className="hover:underline">
//               Contact
//             </Link>
//             <button
//               onClick={toggleTheme}
//               className="px-3 py-1 border rounded text-sm"
//             >
//               {theme === "dark" ? "Light" : "Dark"}
//             </button>
//           </nav>

//           {/* Mobile */}
//           <div className="md:hidden flex items-center gap-2">
//             <button
//               onClick={toggleTheme}
//               className="p-2 border rounded"
//               aria-label="Toggle Theme"
//             >
//               {theme === "dark" ? "☀️" : "🌙"}
//             </button>
//             <button
//               onClick={() => setOpen((o) => !o)}
//               className="p-2 text-2xl"
//               aria-label="Toggle Menu"
//             >
//               {open ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>

//         {open && (
//           <div className="md:hidden bg-pink-50 dark:bg-gray-900 px-6 pb-4">
//             <Link to="/" className="block py-2" onClick={() => setOpen(false)}>
//               Home
//             </Link>
//             <Link
//               to="/projects"
//               className="block py-2"
//               onClick={() => setOpen(false)}
//             >
//               Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="block py-2"
//               onClick={() => setOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         )}
//       </header>

//       {/* Main */}
//       <main className="pt-[100px]">
//         <Outlet /> {/* child pages render yaha */}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-8">
//         <div className="max-w-7xl mx-auto px-6 text-center text-sm">
//           © {new Date().getFullYear()} Aakash — React Router v7 + Tailwind
//         </div>
//       </footer>
//     </div>
//   );
// }
