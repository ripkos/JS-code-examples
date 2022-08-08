const UserRepository = require('../repository/sequelize/UserRepository')

exports.getUsers = (req, res, next) => {
    UserRepository.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        });
}
exports.getUserById = (req, res, next) => {
    const userID = req.params.user_id;
    UserRepository.getUserById(userID)
        .then(user => {
            if(!user) {
                res.status(404).json({
                    message: 'No user with id ' + userID
                });
            }
            else {
                res.status(200).json(user);
            }
        });
};

exports.createUser = (req, res, next) => {
    UserRepository.createUser(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.updateUser = (req, res, next) => {
    const userID = req.params.user_id;
    UserRepository.updateUser(userID,req.body)
        .then(result => {
            res.status(200).json({message: 'User updated.', user: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.user_id;
    UserRepository.deleteUser(userId)
        .then(result => {
            res.status(200).json({message: 'User deleted', user: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}