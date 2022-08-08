const ItemRepository = require('../repository/sequelize/ItemRepository')

exports.getItems = (req, res, next) => {
    ItemRepository.getItems()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            console.log(err);
        });
}
exports.getItemById = (req, res, next) => {
    const itemID = req.params.item_id;
    ItemRepository.getItemById(itemID)
        .then(item => {
            if(!item) {
                res.status(404).json({
                    message: 'No item with id ' + itemID
                });
            }
            else {
                res.status(200).json(item);
            }
        });
};

exports.createItem = (req, res, next) => {
    ItemRepository.createItem(req.body)
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

exports.updateItem = (req, res, next) => {
    const itemID = req.params.item_id;
    ItemRepository.updateItem(itemID,req.body)
        .then(result => {
            res.status(200).json({message: 'Item updated.', item: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.deleteItem = (req, res, next) => {
    const itemID = req.params.item_id;
    ItemRepository.deleteItem(itemID)
        .then(result => {
            res.status(200).json({message: 'Item deleted', item: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}