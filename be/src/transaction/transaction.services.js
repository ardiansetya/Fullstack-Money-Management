import { deleteTransactionInDb, findAllTransactions, findTransactionById, insertTransaction, updateTransactionInDb } from "./transaction.repository.js";


export const getAllTransactions = async () => {
   return await findAllTransactions();
};

export const getTransactionById = async (id) => {
   return await findTransactionById(id);
};

export const createTransaction = async (newTransactionData) => {

   const createdTransaction = await insertTransaction(newTransactionData);  
   return createdTransaction;
};

export const updateTransaction = async (id, newTransactionData) => {
   const transaction = await findTransactionById(id);

   if (!transaction) {
      throw new Error('Transaction not found!');
   }

   const updatedTransaction = await updateTransactionInDb(id, newTransactionData);  // Menggunakan updateTransactionInDb untuk mengubah data
   return updatedTransaction;
};

export const deleteTransaction = async (id) => {
   const transaction = await findTransactionById(id);

   if (!transaction) {
      throw new Error('Transaction not found!');
   }

   const deletedTransaction = await deleteTransactionInDb(id);  
   return deletedTransaction;
};
