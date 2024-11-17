import express from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "./category.services.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/categories", authMiddleware, async (req, res) => {
   try {
      const categories = await getAllCategories();

      return res.status(200).send({
         data: categories,
         message: 'Category Get Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
});

router.get("/category/:id", authMiddleware, async (req, res) => {
   const id = req.params.id
   try {
      const category = await getCategoryById(id);

      return res.status(200).send({
         data: category,
         message: 'Category Get Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
});

router.post("/category", authMiddleware, async (req, res) => {
   try {
      const newCategoryData = req.body

      const category = await createCategory(newCategoryData)

      return res.status(200).send({
         data: category,
         message: 'Category Insert Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
})

router.patch("/category/:id", authMiddleware, async (req, res) => {
   try {
      const id = req.params.id
      const newCategoryData = req.body

      const category = await updateCategory(id, newCategoryData)

      return res.status(200).send({
         data: category,
         message: 'Category Update Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
})

router.delete("/category/:id", authMiddleware, async (req, res) => {
   try {
      const id = req.params.id
      await deleteCategory(id)

      return res.status(200).send({
         message: 'Category Delete Succsessfully!'
      })
   } catch (error) {
      throw new Error(error.message)
   }
})

export default router
