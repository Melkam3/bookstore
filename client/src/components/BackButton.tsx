import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom"


function BackButton() {
  return (
    <div className="flex">
     <Link to="/"
     className=" text-2xl bg-blue-500 m-4 px-4 rounded-xl text-white">
     <BsArrowLeft />
     </Link>

    </div>
  )
}

export default BackButton
