import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  price: {type:Number, required: true},
  stock: { type: Number, default:0 },
  category: String,
  createAt: { type: Date, default: Date.now },
  
});

export const product = mongoose.model('product', productSchema);