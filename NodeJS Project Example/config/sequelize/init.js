const sequelize = require('./sequelize');

const Buy = require('../../model/sequelize/Buy');
const Item = require('../../model/sequelize/Item');
const User = require('../../model/sequelize/User');

module.exports = () => {
    User.hasMany(Buy, {as: 'buys', foreignKey: {name: 'user_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Buy.belongsTo(User, {as: 'users', foreignKey: {name: 'user_id', allowNull: false}});
    Item.hasMany(Buy, {as: 'buys', foreignKey: {name: 'item_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Buy.belongsTo(Item, {as: 'items', foreignKey: {name: 'item_id', allowNull: false}});

    let allUsers, allItems;
    return sequelize
        .sync({force: true})
        .then( () => {
            return User.findAll();
        })
        .then(users => {
            if (!users || users.length === 0) {
                return User.bulkCreate([
                    {firstName: 'Jan', lastName: 'kowalski', email: 'kowalski@gmail.com'},
                    {firstName: 'Jan2', lastName: 'kowalski2', email: 'kowalski2@gmail.com'},
                    {firstName: 'Jan3', lastName: 'kowalski3', email: null},
                ])
                    .then( () => {
                        return User.findAll();
                    });
            } else {
                return users;
            }
        })
        .then( users => {
            allUsers = users;
            return Item.findAll();
        })
        .then (items => {
            if (!items || items.length === 0) {
                return Item.bulkCreate([
                    {itemName: 'item1',itemPrice: 500 },
                    {itemName: 'item2',itemPrice: 1000 },
                    {itemName: 'item3',itemPrice: 2000 },
                ])
                    .then( () => {
                        return Item.findAll();
                    });
            } else {
                return items;
            }
        })
        .then(items => {
            allItems = items;
            return Buy.findAll();
        })
        .then (buys => {
            if (!buys || buys.length === 0) {
                return Buy.bulkCreate([
                    {user_id: allUsers[0]._id, item_id: allItems[0]._id, count: 1, buyDate:'2012-01-01'},
                    {user_id: allUsers[1]._id, item_id: allItems[1]._id, count: 2, buyDate:'2013-01-01'},
                    {user_id: allUsers[2]._id, item_id: allItems[2]._id, count: 3, buyDate:'2014-01-01'},
                ])
                    .then( () => {
                        return Buy.findAll();
                    });
            } else {
                return buys;
            }
        })
}