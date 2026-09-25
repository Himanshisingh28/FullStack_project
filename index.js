import 'dotenv/config'
import express from 'express'; 
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import productroutes from './routes/productroutes.js';


const app = express(); 
const PORT = 3000;

app.use(cors());              
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

  app.get('/', (req, res) => {
  res.send('Hello World!');
}); //

app.use('/api/auth', authRoutes);
app.use('/api/products', productroutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); //

// global error-handler

app.use((err, req, res, next) =>{
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong on the server"}) 
});