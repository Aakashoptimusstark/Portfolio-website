
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <button
      onClick={toggleTheme}
      className={`hidden md:flex w-[100px] h-[50px] p-[10px] rounded-[50px] cursor-pointer 
        ${theme === "dark" ? "justify-start" : "justify-end"} 
        bg-transparent dark:bg-gray-700`}
    >
      <motion.div
        layout
        transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
        className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl bg-yellow-400 dark:bg-indigo-600"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.div>
    </button>
  )
}