import { Book } from "../models/bookModel.js"

  // create books
const createBook=async(req,res)=>{
  try {
        if(
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear 
      ){
        return res.status(400).send({
            message:"Please fill all required field"
        })
      }
      const newbook={
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear
      }

   const book=  await Book.create(newbook)
   return res.status(201).send(book)
  } catch (error) {
     return res.status(500).send({message:error.message})
  }
}

// get all books

const getAllBooks=async(req,res)=>{
    try {
        const books= await Book.find();
        if(books){
            return  res.status(200).send(books)
        }

    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}

// get one books

const getOneBook=async(req,res)=>{
  try {
         const {id }=req.params;
         const book= await Book.findById(id)
         return res.status(200).send(book)
  } catch (error) {
    return res.status(500).send({message:error.message})
  }
}

// update book

const updateBook=async(req,res)=>{
   try {
        if(
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear 
      ){
        return res.status(400).send({
            message:"Please fill all required field"
        })
      }
    
      const {id}=req.params;
     
   const book=  await Book.findByIdAndUpdate(id,req.body)
   return res.status(201).send(book)
  } catch (error) {
     return res.status(500).send({message:error.message})
  }
}

// delete books 
 
const deleteBook=async(req,res)=>{
  try {
         const {id }=req.params;
         const book= await Book.findByIdAndDelete(id)
         return res.status(200).send({ message: 'Book deleted successfully' })
  } catch (error) {
    return res.status(500).send({message:error.message})
  }
}
export{
  createBook,
getAllBooks,
getOneBook,
updateBook,
deleteBook} 
