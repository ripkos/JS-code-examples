const Sequelize = require('sequelize')
const sequelize = require('../../config/sequelize/sequelize')

const Buy = sequelize.define('Buy', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    item_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    buyDate: {
        type: Sequelize.DATE,
        allowNull:false,
    }
});

module.exports = Buy;