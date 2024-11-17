import prisma from "../db/index.js";
export const findAllUsers = async () => {
   return await prisma.user.findMany();
};

export const findUserById = async (id) => {
   return await prisma.user.findUnique({
      where: {
         id,
      },
   });
};

export const findUserByname = async (name) => {
   return await prisma.user.findUnique({
      where: {
         name,
      },
   });
};

export const findUserByEmail = async (email) => {
   return await prisma.user.findUnique({
      where: {
         email,
      },
   });
   }

export const insertUser = async (newUserData) => {
   const user = await prisma.user.create({
      data: {
         name: newUserData.name,
         email: newUserData.email,
         password: newUserData.password,
      }
   })
   return user
}

export const updateUserInDb = async (id, newUserData) => {
   return await prisma.user.update({
      where: {
         id,
      },
      data: {
         name: newUserData.name,
         email: newUserData.email,
         password: newUserData.password,
      }
   })
}

export const deleteUserInDb = async (id) => {
   return await prisma.user.delete({
      where: {
         id,
      },
   });
};