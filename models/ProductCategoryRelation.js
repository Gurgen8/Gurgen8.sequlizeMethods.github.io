import Products from "./Products";
import Categories from "./Categories";
import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize";

class ProductCategoryRelation extends Model {


}

ProductCategoryRelation.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
},{
  sequelize,
  modelName: 'ProductCategoryRelation',
  tableName: 'productCategoryRelation',
  timestamps: false,
})

Products.belongsToMany(Categories, {
  foreignKey: 'productId', // categoryId
  through: ProductCategoryRelation,
  as: 'categories',
});


Categories.belongsToMany(Products, {
  foreignKey: 'categoryId', // productId
  through: ProductCategoryRelation,
  as: 'products'
});


export default ProductCategoryRelation
