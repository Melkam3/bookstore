import { useEffect, useState } from "react"
import Spinning from "../components/Spinning"
import { MdAddCircleOutline } from "react-icons/md"
import { Link } from "react-router-dom"
import axios from "axios"
import BooksTable from "../components/BooksTable"
import BooksCard from "../components/BooksCard"

 export interface Book {
    _id:string,
    title:string,
    author:string,
    publishYear:number
 }

function Home() {
     
    const [books, setBook]=useState<Book[]>([])
    const [loading,setLoading]=useState<boolean>(true)
    const [showType,setShowType]=useState<string>("table")

    
    
    useEffect(()=>{
        axios
        .get("http://localhost:5000/books")
        .then((response)=>{ 
           setLoading(false);
           setBook(response.data)
        }) 
        .catch((error)=>{
            console.log(error)
        })
    },[])
  

  return (
    <div className=" p-4 ">
        <div className="flex justify-center items-center gap-4 p- ">
           <button 
     onClick={()=>setShowType("table")}
     className="bg-blue-400 px-4 py-1 rounded-2xl text-white hover:bg-blue-500 cursor-pointer">Table</button>

      <button 
     onClick={()=>setShowType("card")}
     className="bg-blue-400 px-4 py-1 rounded-2xl text-white  hover:bg-blue-500 cursor-pointer">Card</button>
        </div>
     <div className="flex justify-between items-center">
        <h1 className="text-3xl">Book list</h1>
       <Link to="/books/create" >
          <MdAddCircleOutline className="bg-blue-500 text-3xl rounded-full text-white "/>
       </Link>

     </div>
       
       {
        loading ?(
          <Spinning/>
        ):showType ==="table" ?(
             <BooksTable books={books}/>
        ):(
          <BooksCard/>
        )
       }

    </div>
   
  )
}

export default Home