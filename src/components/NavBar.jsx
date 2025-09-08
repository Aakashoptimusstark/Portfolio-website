import { NavLink, Outlet, Link } from "react-router-dom"; // 👈 Link add kiya
import { useState, useEffect } from "react";


// ✅ Dark Mode hook ko component ke bahar rakho


function NavBar() {
  const [theme, toggleTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="w-full flex justify-between bg-[rgb(238,200,247)] dark:bg-violet-400 shadow-md sticky top-0 z-30 px-4 py-4">
        
        {/* Left Logo */}
        <div className="h-14">
          <a
            href="https://www.linkedin.com/in/aakash-srivastava-580b50330/"
            target="_blank"
            rel=""
            className="text-3xl  hover:shadow-xl  font-bold font-serif"
          >
          Aakash Srivastava
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:justify-around items-center gap-6">
          <NavLink to="/"  className={({ isActive }) =>  `px-4 py-2 rounded hover:underline shadow-md hover:shadow-xl transform hover:-translate-y-1 transition ${isActive ? "text-black-800 font-extrabold" : ""}`}>Home</NavLink>
            
          <NavLink to="/user/Contact" className={({ isActive }) =>`px-4 py-2 rounded hover:underline shadow-md hover:shadow-xl transform hover:-translate-y-1 transition ${isActive ? "text-black-800 font-extrabold" : ""}`}>Contact</NavLink>

          <NavLink  to="/Project"  className={({ isActive }) =>`px-4 py-2 rounded hover:underline shadow-md hover:shadow-xl transform hover:-translate-y-1 transition ${isActive ? "text-black-800 font-extrabold" : ""}`}>Projects</NavLink>    
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 border rounded"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-2xl"
            aria-label="Toggle Menu"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-pink-50 dark:bg-gray-900 px-6 pb-4">
          <Link to="/" className="block py-2 active:text-blue-700" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            to="/Project"
            className="block py-2 active:text-blue-700"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/user/Contact"
            className="block py-2 active:text-blue-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="https://www.linkedin.com/in/aakash-srivastava-580b50330/"
            className="block py-2 active:text-blue-700"
            onClick={() => setOpen(false)}
          >Linkedin</Link>
          <Link
            to="https://github.com/Aakashoptimusstark"
            className="block py-2 active:text-blue-700"
            onClick={() => setOpen(false)}
          >Github</Link>
          <Link
            to="https://x.com/@AakashSriv62244"
            className="block py-2 active:text-blue-700"
            onClick={() => setOpen(false)}
          >Twitter</Link>
          
        </div>
      )}

      {/* Child pages */}
      <main className="pt-[80px]">
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;