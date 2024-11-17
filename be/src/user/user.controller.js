import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "./user.services.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", authMiddleware, async (req, res) => {
   try {
      const users = await getAllUsers();

      return res.status(200).send({
         data: users,
         message: 'User Get Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
});
router.get("/user/:id", authMiddleware, async (req, res) => {
   const id = req.params.id
   try {
      const users = await getUserById(id);

      return res.status(200).send({
         data: users,
         message: 'User Get Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
});

router.post("/user", authMiddleware, async (req, res) => {
   try {
      const newUserData = req.body

      const user = await createUser(newUserData)

      return res.status(200).send({
         data: user.id,
         message: 'User Insert Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
})

router.patch("/user/:id", authMiddleware, async (req, res) => {
   try {
      const id = req.params.id
      const newUserData = req.body

      const user = await updateUser(id, newUserData)

      return res.status(200).send({
         data: user,
         message: 'User Update Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
})

router.delete("/user/:id", authMiddleware, async (req, res) => {
   try {
      const id = req.params.id
      await deleteUser(id)

      return res.status(200).send({
         message: 'User Delete Succsessfully!'
      })
   } catch (error) {
      throw new Error(error.message)
   }
})

export default router
