import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
      try {
            const { name, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                  name,
                  email,
                  password: hashedPassword
            });

            res.status(201).json({
                  message: "User registered successfully",
                  user: { id: newUser._id, name: newUser.name, email: newUser.email }
            });

      } catch (error) {
            res.status(400).json({ message: error.message });
      }
};

export const loginUser = async (req, res) => {
      try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                 return res.status(404).json({ message: "User not found" })
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                  return res.status(401).json({ message: "Invalid password" });
            }
            const token = jwt.sign(
                  { id: user._id, email: user.email },
                  process.env.JWT_SECRET,
                  { expiresIn: '1d' }
            );

            res.status(200).json({
                  message: "Login successful",
                  token,
                  user: { id: user._id, name: user.name, email: user.email }
            });
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
}