import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBook from "./pages/CreateBook"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";

function App() {


  return (
    < >
      <div className="max-w-300  mx-auto">
          <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>
      <Route path="/books/edit/:id" element={<EditBook/>}/>
    </Routes>
      </div>
    </>
  )
}

export default App
