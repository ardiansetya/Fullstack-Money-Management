import express from "express";
import { createTransaction, deleteTransaction, getAllTransactions, getTransactionById, updateTransaction } from "./transaction.services.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/transactions", authMiddleware, async (req, res) => {
   try {
      const transactions = await getAllTransactions();

      return res.status(200).send({
         data: transactions,
         message: 'Transaction Get Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
});
router.get("/transaction/:id", authMiddleware, async (req, res) => {
   const id = req.params.id
   try {
      const transactions = await getTransactionById(id);

      return res.status(200).send({
         data: transactions,
         message: 'Transaction Get Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
});

router.post("/transaction", authMiddleware, async (req, res) => {
   try {
      const newTransactionData = req.body

      const transaction = await createTransaction(newTransactionData)

      return res.status(200).send({
         data: transaction.id,
         message: 'Transaction Insert Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
})

router.patch("/transaction/:id", authMiddleware, async (req, res) => {
   try {
      const id = req.params.id
      const newTransactionData = req.body

      const transaction = await updateTransaction(id, newTransactionData)

      return res.status(200).send({
         data: transaction,
         message: 'Transaction Update Succsessfully!'
      })
   } catch (err) {
      res.status(400).send(err.message)
   }
})

router.delete("/transaction/:id", authMiddleware, async (req, res) => {
   try {
      const id = req.params.id
      await deleteTransaction(id)

      return res.status(200).send({
         message: 'Transaction Delete Succsessfully!'
      })
   } catch (error) {
      throw new Error(error.message)
   }
})

export default router
