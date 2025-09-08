import { Link } from "react-router-dom"
function PageNotFound(){
  return(
    <div class="bg-[url('./light1.png')] flex justify-center items-center h-screen bg-cover bg-center dark:bg-[url('./dark.png')]">
      <Link to="/"><button class="bg-blue-500 rounded-lg text-lg text-white font-semibold h-12 w-35 ">Go to Home</button></Link>

    </div>
  )
}
export default PageNotFound