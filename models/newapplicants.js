const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewApplicants extends Model { }

NewApplicants.init(
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
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
  },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    move_in_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    move_out_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    pets: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    pet_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    smoking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'newapplicants',
  }
);

module.exports = NewApplicants;
