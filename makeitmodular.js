const fs = require('fs'), path = require('path');

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (f) {
            return path.extname(f) === '.' + ext
        });

        callback(null, list)
    })
}