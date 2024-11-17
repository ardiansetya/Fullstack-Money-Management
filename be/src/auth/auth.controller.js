// controllers/authController.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../db/index.js'; // Atau database Anda

const router = express.Router();

// Register
router.post('/register',  async (req, res) => {
   const { name, password, email } = req.body;

   try {
      // Cek jika pengguna sudah ada
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
         return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Simpan pengguna baru
      const user = await prisma.user.create({
         data: {
            name,
            email,
            password: hashedPassword,
         },
      });

      // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      //    expiresIn: '1h',
      // });

      res.status(201).json({ message: 'User registered successfully' });
   } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
   }
});

// Login
router.post('/login', async (req, res) => {
   const { email, password } = req.body;

   try {
      // Cek apakah user ada
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
         return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Verifikasi password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
         expiresIn: '1h',
      });

      res.json({ user: { id: user.id, name: user.name }, token});
   } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
   }
});

export default router
