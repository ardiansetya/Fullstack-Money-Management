import prisma from "../db/index.js";
export const findAllTransactions = async () => {
   return await prisma.transaction.findMany();
};

export const findTransactionById = async (id) => {
   return await prisma.transaction.findUnique({
      where: {
         id,
      },
   });
};

export const findTransactionByUserId = async (userId) => {
   return await prisma.transaction.findUnique({
      where: {
         userId,
      },
   });
};

export const findTransactionByCategoryId = async (categoryId) => {
   return await prisma.transaction.findUnique({
      where: {
         categoryId,
      },
   });
}

export const insertTransaction = async (newTransactionData) => {
   const transaction = await prisma.transaction.create({
      data: {
         userId: newTransactionData.userId,
         categoryId: newTransactionData.categoryId,
         type: newTransactionData.type,
         amount: newTransactionData.amount,
         category: newTransactionData.category,
         description: newTransactionData.description,
         date: newTransactionData.date,
      }
   })
   return transaction
}

export const updateTransactionInDb = async (id, newTransactionData) => {
   return await prisma.transaction.update({
      where: {
         id,
      },
      data: {
         type: newTransactionData.type,
         amount: newTransactionData.amount,
         category: newTransactionData.category,
         description: newTransactionData.description,
         date: newTransactionData.date,
      }
   })
}

export const deleteTransactionInDb = async (id) => {
   return await prisma.transaction.delete({
      where: {
         id,
      },
   });
};