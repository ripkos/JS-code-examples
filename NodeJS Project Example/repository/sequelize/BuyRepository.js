const User = require('../../model/sequelize/User');
const Item = require('../../model/sequelize/Item');
const Buy = require('../../model/sequelize/Buy');

exports.getBuys = () => {
    return Buy.findAll({
        include: [
            {
                model: User,
                as: 'users'
            },
            {
                model: Item,
                as: 'items',
            }
        ]
    });
};

exports.getBuyById = (buyID) => {
    return Buy.findByPk(buyID,
        {
            include: [
                {
                    model: User,
                    as: 'users'
                },
                {
                    model: Item,
                    as: 'items',
                }
            ]
        });
};

exports.createBuy = (newBuyData) => {
    return Buy.create({
        user_id: newBuyData.user_id,
        buy_id: newBuyData.buy_id,
        buyDate: newBuyData.buyDate,
        count: newBuyData.count
    });
};

exports.updateBuy = (buyID,buyData) => {
    return Item.update(buyData, {where: {_id:buyID}});
};

exports.deleteBuy = (buyID) => {
    return Buy.destroy({
        where: {_id: buyID}
    });
};