import { useState } from "react"
import BackButton from "../components/BackButton";


function CreateBook() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("")
  const [publishYear, setPublishYear] = useState()


  return (
    <div className=" ">
        <BackButton/>
      <form action="" className="flex flex-col gap-2 justify-center items-center mt-10 bg-blue-300 w-125 mx-auto ">
        <h1>Create Book</h1>
        <div className="">
          <span>Title: </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border  "
            type="text" />
        </div>
        <div>
          <span>Title: </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border"
            type="text" />
        </div>
        <div>
          <span>Title: </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border"
            type="text" />
        </div>
      </form>
    </div>
  )
}

export default CreateBook