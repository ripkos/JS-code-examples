const User = require('../../model/sequelize/User');
const Item = require('../../model/sequelize/Item');
const Buy = require('../../model/sequelize/Buy');

exports.getItems = () => {
    return Item.findAll();
}
exports.getItemById = (itemID) => {
    return Item.findByPk(itemID,
        {
            include: [{
                model: Buy,
                as: 'buys',
                include: [{
                    model: User,
                    as:'users',
                }]
            }]
        });
};

exports.createItem = (newItemData) => {
    return Item.create({
        itemPrice: newItemData.itemPrice,
        itemName: newItemData.itemName,
    });
};

exports.updateItem = (itemID,itemData) => {
    //const itemPrice = itemData.itemPrice;
   // const itemName = itemData.itemName;
    return Item.update(itemData, {where: {_id:itemID}});
};

exports.deleteItem = (userID) => {
    return Item.destroy({
        where: {_id: userID}
    });
};