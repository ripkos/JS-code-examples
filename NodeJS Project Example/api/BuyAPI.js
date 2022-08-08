const BuyRepository = require('../repository/sequelize/BuyRepository')

exports.getBuys = (req, res, next) => {
    BuyRepository.getBuys()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        });
}
exports.getBuyById = (req, res, next) => {
    const buyID = req.params.buy_id;
    BuyRepository.getBuyById(buyID)
        .then(user => {
            if(!user) {
                res.status(404).json({
                    message: 'No buy with id ' + buyID
                });
            }
            else {
                res.status(200).json(user);
            }
        });
};

exports.createBuy = (req, res, next) => {
    BuyRepository.createBuy(req.body)
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

exports.updateBuy = (req, res, next) => {
    const userId = req.params.buy_id;
    BuyRepository.updateBuy(userId,req.body)
        .then(result => {
            res.status(200).json({message: 'Buy updated.', buy: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.deleteBuy = (req, res, next) => {
    const buyID = req.params.buy_id;
    BuyRepository.deleteBuy(buyID)
        .then(result => {
            res.status(200).json({message: 'Buy deleted', buy: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}