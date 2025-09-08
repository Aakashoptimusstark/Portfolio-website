// {ProjectCard.jsx}
export default function ProjectCard({ p }) {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition bg-white dark:bg-gray-700 cursor-pointer">
      <div className="w-full h-40 overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
      </div>
      
      <div className="p-10">
        <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">{p.description}</p>
        <div className="flex items-center justify-between">
          <a
            href={p.link || "#"}
            target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline"
          >
            View
          </a>
          
        </div>
      </div>
    </div>
  );
}

