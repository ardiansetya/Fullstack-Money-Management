import {
   findAllUsers,
   insertUser,
   updateUserInDb,
   deleteUserInDb,
   findUserByEmail,
   findUserById
} from "./user.repository.js"; // Sesuaikan dengan fungsi yang ada di file repository

export const getAllUsers = async () => {
   return await findAllUsers();
};

export const getUserById = async (id) => {
   return await findUserById(id);
}

export const createUser = async (newUserData) => {
   const user = await findUserByEmail(newUserData.email);

   if (user) {
      throw new Error('Email is already exist!');
   }

   const createdUser = await insertUser(newUserData);  // Menggunakan createdUser untuk menyimpan data yang baru
   return createdUser;
};

export const updateUser = async (id, newUserData) => {
   const user = await findUserById(id);

   if (!user) {
      throw new Error('User not found!');
   }

   const updatedUser = await updateUserInDb(id, newUserData);  // Menggunakan updateUserInDb untuk mengubah data
   return updatedUser;
};

export const deleteUser = async (id) => {
   const user = await findUserById(id);

   if (!user) {
      throw new Error('User not found!');
   }

   const deletedUser = await deleteUserInDb(id);  // Menggunakan deleteUserInDb untuk menghapus data
   return deletedUser;
};
