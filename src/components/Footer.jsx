

function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-gray-400 py-6  mt-8">
      
      <div className="max-w-6xl h-10 mx-auto text-center text-lg">
        
        © {new Date().getFullYear()} Aakash — Built with React, React-Router & TailwindCSS
      </div>
    </footer>
  );
}
export default Footer;