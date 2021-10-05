import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";


class Categories extends Model {

}

Categories.init({
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
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  sequelize,
  modelName: 'Categories',
  tableName: 'categories'
});



export default Categories;
