import { Link } from "react-router-dom"
import type { Book } from "../pages/Home"
import { BsInfoCircle } from "react-icons/bs"
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineDelete } from "react-icons/md"



interface CardBookProps {
  books: Book[]
}

function BooksCard({ books }:CardBookProps) {

  return (
    <div className="grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 gap-8 ">
      {books.map((book) =>(
        <div key={book._id} className="flex flex-col border p-4  rounded-2xl shadow">
          <span>Author: {book.author }</span>
          <span>Title: {book.title}</span>
          <div className="flex items-center justify-around p-1 mt-4">
            <Link to='/books/details'>
              <BsInfoCircle className="text-3xl text-blue-500 hover:text-blue-600" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-3xl text-yellow-400" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-3xl text-red-500" />
            </Link>
          </div>
        </div>

      ))

      }
    </div>
  )
}

export default BooksCard