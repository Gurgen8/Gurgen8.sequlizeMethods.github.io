import { Products, Categories, ProductCategoryRelation } from "../models";
import Sequelize, { literal } from "sequelize";
import moment from "moment";
import 'moment-timezone';

class ProductsController {


  static product = async (req, res, next) => {
    try {
      const product = await Products.findAll({
        where: {
          $or: [
            { id: 1 },
            // {categoriesId: Sequelize.literal('categories.id = 3')},
            { '$categories.id$': 2 }
          ]
        },
        include: [{
          model: Categories,
          through: {
            model: ProductCategoryRelation,
            attributes: []
          },
          required: false,
          as: 'categories',
        }],
        subQuery: false,
        logging: true
      });

      // const catId = 3;
      // const category = await Categories.findByPk(catId, {
      //   include: [{
      //     model: Products,
      //     through: ProductCategoryRelation,
      //     as: 'products'
      //   }]
      // });
      //
      // const categoryProducts = await Products.findAll({
      //   include: [{
      //     model: Categories,
      //     through: ProductCategoryRelation,
      //     as: 'categories',
      //     where: {
      //       id: catId,
      //     }
      //   }]
      // });

      res.json({
        status: 'ok',
        // categoryProducts,
        // category,
        product,
      })
    } catch (e) {
      next(e)
    }
  }


}

export default ProductsController;
