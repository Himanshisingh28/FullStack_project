import express from 'express'; 
import mongoose from 'mongoose';

const {connection}  = mongoose 
import productroutes from './routes/productroutes.js';

const app = express(); 
const PORT = 3000;

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));
// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
}); //

app.use('/api/products', productroutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); //
