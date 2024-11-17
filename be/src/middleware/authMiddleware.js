import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

export const authMiddleware = async (req, res, next) => {
   const token = req.header('Authorization')?.replace('Bearer ', '');
   if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
   }
   try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
   } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
   }
};

