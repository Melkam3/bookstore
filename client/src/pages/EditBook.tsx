import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinning from "../components/Spinning";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"; // 👈 Import useForm
import { toast } from "react-toastify";

// 1. Define the type structure for your form inputs
interface BookFormData {
  title: string;
  author: string;
  publishYear: number;
}

function EditBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id}= useParams()

  // 2. Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<BookFormData>();

    useEffect(()=>{
     
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setLoading(false);
        reset(response.data)
        
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        toast.error(errorMessage);
        console.error(error);
      });
  },[id, reset])
  // 3. This function executes ONLY if validation passes
  const onSubmit = (data: BookFormData) => {
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        toast.success("updated successfully");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        toast.error(errorMessage);
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col">
      <BackButton />
      {loading ? <Spinning /> : ""}
      
      {/* 4. Wrap inside a semantic HTML form element */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col p-4 rounded-2xl mt-10 border-2 border-blue-300 w-125 mx-auto shadow-2xl"
      >
        <h1 className="text-center text-2xl mb-4">Update Book</h1>
        
        {/* TITLE INPUT */}
        <div className="my-2">
          <label className="block mb-1 font-medium">Title:</label>
          <input
            type="text"
            className="border w-full rounded-md outline-none p-1"
            {...register("title", { required: "Title is required" })} // 👈 Registered & Required
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* AUTHOR INPUT */}
        <div className="my-2">
          <label className="block mb-1 font-medium">Author:</label>
          <input
            type="text"
            className="border w-full rounded-md outline-none p-1"
            {...register("author", { required: "Author is required" })} // 👈 Registered & Required
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
        </div>

        {/* PUBLISH YEAR INPUT */}
        <div className="my-2">
          <label className="block mb-1 font-medium">Publish Year:</label>
          <input
            type="number"
            className="border w-full rounded-md outline-none p-1"
            // valueAsNumber: true parses the string to an actual number automatically! 👇
            {...register("publishYear", { 
              required: "Publish Year is required",
              valueAsNumber: true 
            })}
          />
          {errors.publishYear && <p className="text-red-500 text-sm mt-1">{errors.publishYear.message}</p>}
        </div>

        {/* 5. Set button type to 'submit' to hook into handleSubmit */}
        <button 
          type="submit"
          className="bg-blue-500 m-4 text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBook;