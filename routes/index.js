import express from "express";
import products from "./products";

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ title: 'Express' });
});
router.use('/products', products);

export default router;
