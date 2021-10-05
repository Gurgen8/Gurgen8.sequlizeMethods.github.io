import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";


class Users extends Model {

}

Users.init({
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  sequelize,
  modelName: 'Users',
  tableName: 'users'
});



export default Users;
