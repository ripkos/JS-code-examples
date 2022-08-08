const Sequelize = require('sequelize')
const sequelize = require('../../config/sequelize/sequelize')

const Item = sequelize.define('Item', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    itemName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    itemPrice: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }

});

module.exports = Item;