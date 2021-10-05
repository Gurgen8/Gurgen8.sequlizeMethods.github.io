import express from "express";
import ProductsController from "../controllers/ProductsController";

const router = express.Router();

router.get('/', ProductsController.product);

export default router;
