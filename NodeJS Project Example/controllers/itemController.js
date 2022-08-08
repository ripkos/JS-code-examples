exports.showItemList = (req, res, next) => {
    res.render('pages/items/list', {navLocation: 'items'});
}

exports.showItemAdd = (req, res, next) => {
    res.render('pages/items/form', {navLocation: 'items'});
}
exports.showItemModify = (req, res, next) => {
    res.render('pages/items/form-edit', {navLocation: 'items'});
}

exports.showItemDetail = (req, res, next) => {
    res.render('pages/items/detail', {navLocation: 'items'});
}