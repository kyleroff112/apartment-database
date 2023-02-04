const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Signup extends Model { }

Signup.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    applicant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'signup',
  }
);

module.exports = Signup;
