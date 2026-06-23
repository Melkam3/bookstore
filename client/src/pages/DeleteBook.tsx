import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";


function DeleteBook() {

    const navigate = useNavigate();
    const { id } = useParams();
    const handleDelete = () => {
        axios
            .delete(`http://localhost:5000/books/${id}`)
            .then(() => {

                toast.success("deleted successfully");
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
                toast.error(errorMessage);
                console.error(error);
            });

    }

    return (
        <div className="flex flex-col items-center justify-center  h-screen">
          <div  className="border p-4 rounded-2xl shadow-2xl flex flex-col">
             <h2>Are you shure you want to delete this book</h2>
            <button 
            className="bg-red-500 text-2xl text-white rounded-2xl mt-4 cursor-pointer"
             onClick={handleDelete} >
                Delete
            </button>
          </div>
        </div>
    )
}

export default DeleteBook