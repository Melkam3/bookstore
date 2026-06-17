import express from "express"
import { createBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/bookcontrolllers.js"
const router=express.Router()

router.post("/create",createBook)
router.get("/",getAllBooks)
router.get("/:id",getOneBook)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)

export default router