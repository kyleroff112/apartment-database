const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');

class Application extends Model { }

Application.init(
    {
        applicant_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pets: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_description: {
            type: DataTypes.STRING,
            allowNull: false
        },

        smoker: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        employment: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'applicant'
    }
);

module.exports = Application;