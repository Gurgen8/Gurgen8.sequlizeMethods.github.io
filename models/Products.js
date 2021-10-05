import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";
import Users from "./Users";

class Products extends Model {

}

Products.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

}, {
  sequelize,
  modelName: 'Products',
  tableName: 'products',
});


Products.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
  onUpdate: 'cascade',
  onDelete: 'set null'
});

Users.hasMany(Products, {
  foreignKey: 'userId',
  as: 'products',
  onUpdate: 'cascade',
  onDelete: 'set null'
});


Users.hasOne(Products, {
  foreignKey: 'userId',
  as: 'product',
  onUpdate: 'cascade',
  onDelete: 'set null'
});


export default Products;



