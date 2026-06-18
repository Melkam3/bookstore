
import { Link } from "react-router-dom"
import type { Book } from "../pages/Home"
import { BsInfoCircle } from "react-icons/bs"
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineDelete } from "react-icons/md"

interface BooksTableProbs{
  books:Book[]
}
function BooksTable({books}:BooksTableProbs) {
  return (
    <div className="">
      <table className="w-full border-separate border-spacing-2  ">
        <thead className="p-2">
          <th className="border ">NO</th>
          <th className="border">Author</th>
          <th className="border">Title</th>
          <th className="border">PublishYear</th>
           <th className="border">Action</th>
        </thead>
        <tbody >
          {books.map((book,index)=>(
            <tr>
              <td className="border text-center">{index+1}</td>
              <td className="border text-center">{book.author}</td>
              <td className="border text-center">{book.title}</td>
              <td className="border text-center">{book.publishYear}</td>
              <td className="border text-center">
                <div className="flex items-center justify-around p-1">
                  <Link to='/books/details'>
                <BsInfoCircle className="text-3xl text-blue-500 hover:text-blue-600"/>
                </Link>
                <Link to="/books/edit">
                  <AiOutlineEdit className="text-3xl text-yellow-400"/>
                </Link>
                <Link to="/books/delete">
                <MdOutlineDelete className="text-3xl text-red-500"/>
                </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable