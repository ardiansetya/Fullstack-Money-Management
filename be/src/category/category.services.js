import { deleteCategoryInDb, findAllCategories, findCategoryById, insertCategory, updateCategoryInDb } from "./category.repository.js";


export const getAllCategories = async () => {
   return await findAllCategories();
};

export const getCategoryById = async (id) => {
   return await findCategoryById(id);
};

export const createCategory = async (newCategoryData) => {

   const createdCategory = await insertCategory(newCategoryData);  // Menggunakan createdCategory untuk menyimpan data yang baru
   return createdCategory;
};

export const updateCategory = async (id, newCategoryData) => {
   const category = await findCategoryById(id);

   if (!category) {
      throw new Error('Category not found!');
   }

   const updatedCategory = await updateCategoryInDb(id, newCategoryData);  
   return updatedCategory;
};

export const deleteCategory = async (id) => {
   const category = await findCategoryById(id);

   if (!category) {
      throw new Error('Category not found!');
   }

   const deletedCategory = await deleteCategoryInDb(id);  
   return deletedCategory;
};
