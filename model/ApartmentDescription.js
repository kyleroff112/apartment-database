const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');

class ApartmentDescription extends Model { }

ApartmentDescription.init(
    {
        apt_unit_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        unit_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        num_rooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        floor_level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        occupies: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pets: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        smoking: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'aptDescription'
    }
);

module.exports = ApartmentDescription;