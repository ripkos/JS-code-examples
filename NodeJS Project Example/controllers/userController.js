exports.showUserList = (req, res, next) => {
    res.render('pages/users/list', {navLocation: 'users'});
}

exports.showUserAdd = (req, res, next) => {
    res.render('pages/users/form', {navLocation: 'users'});
}
exports.showUserModify = (req, res, next) => {
    res.render('pages/users/form-edit', {navLocation: 'users'});
}

exports.showUserDetail = (req, res, next) => {
    res.render('pages/users/detail', {navLocation: 'users'});
}