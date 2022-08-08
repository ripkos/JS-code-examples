const User = require('../../model/sequelize/User');
const Item = require('../../model/sequelize/Item');
const Buy = require('../../model/sequelize/Buy');

exports.getUsers = () => {
    return User.findAll();
}
exports.getUserById = (userID) => {
    return User.findByPk(userID,
        {
            include: [{
                model: Buy,
                as: 'buys',
                include: [{
                    model: Item,
                    as:'items',
                }]
            }]
        });
};

exports.createUser = (newUserData) => {
    return User.create({
        firstName: newUserData.firstName,
        lastName: newUserData.lastName,
        email: newUserData.email,
    });
};

exports.updateUser = (userID,userData) => {
    //const firstName = userData.firstName;
    //const lastName = userData.lastName;
    //const email = userData.email;
    return User.update(userData, {where: {_id:userID}});
};

exports.deleteUser = (userID) => {
    return User.destroy({
        where: {_id: userID}
    });
};