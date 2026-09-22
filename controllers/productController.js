import { product } from "../models/Product.js"

export const createproduct = async (req, res) => {
      try {
            const newproduct = await product.create(req.body);
            res.status(201).json(newproduct);
      } catch (error) {
            res.status(400).json({ message: error.message });
      }
};
export const readproduct = async (req, res) => {
      try {
            const products = await product.find();
            res.status(200).json(products);
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
};

export const getProductById = async (req, res) => {
      try {
            const foundProduct = await product.findById(req.params.id);
            if (!foundProduct) {
                  return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(foundProduct);

      } catch (error) {
            res.status(500).json({ message: error.message });
      }
};


export const Updateproduct = async (req, res) => {
      try {
            updatedProduct  = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProduct ) {
                  return res.status(404).json({ message: "Product is not found" });
            }
            res.status(200).json(updatedProduct );
      } catch (error) {
            res.status(400).json({ message: error.message });
      }
};
export const deleteproduct = async (req, res) => {
      try {
            deletedProduct  = await product.findByIdAndDelete(req.params.id);
            if (!deletedProduct ) {
                  return res.status(404).json({ message: "Product is not found" });
            }
            res.status(200).json({ message: "Product deleted successfull!" });
      } catch (error) {
            res.status(400).json({ message: error.message });
      }
};
