const moduleFilter = require('./makeitmodular'),
    dir = process.argv[2],
    ext = process.argv[3];

moduleFilter(dir, ext, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }

    list.forEach(function (f) {
        console.log(f)
    });
});