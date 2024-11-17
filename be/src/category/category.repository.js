import prisma from "../db/index.js";
export const findAllCategories = async () => {
   return await prisma.category.findMany();
};

export const findCategoryById = async (id) => {
   return await prisma.category.findUnique({
      where: {
         id: id,
      },
   });
};

export const findCategoryByname = async (name) => {
   return await prisma.category.findUnique({
      where: {
         name,
      },
   });
};

export const findCategoryByType = async (type) => {
   return await prisma.category.findUnique({
      where: {
         type,
      },
   });
}

export const insertCategory = async (newCategoryData) => {
   const Category = await prisma.category.create({
      data: {
         name: newCategoryData.name,
         type: newCategoryData.type, 
         userId: newCategoryData.userId
      }
   })
   return Category
}

export const updateCategoryInDb = async (id, newCategoryData) => {
   return await prisma.category.update({
      where: {
         id,
      },
      data: {
         name: newCategoryData.name,
         type: newCategoryData.type,
         userId: newCategoryData.userId
      }
   })
}

export const deleteCategoryInDb = async (id) => {
   return await prisma.category.delete({
      where: {
         id,
      },
   });
};