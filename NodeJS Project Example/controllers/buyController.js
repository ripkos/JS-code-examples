exports.showBuyList = (req, res, next) => {
    res.render('pages/buys/list', {navLocation: 'buys'});
}

exports.showBuyAdd = (req, res, next) => {
    res.render('pages/buys/form', {navLocation: 'buys'});
}
exports.showBuyModify = (req, res, next) => {
    res.render('pages/buys/form-edit', {navLocation: 'buys'});
}

exports.showBuyDetail = (req, res, next) => {
    res.render('pages/buys/detail', {navLocation: 'buys'});
}