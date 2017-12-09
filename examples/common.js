const random = function random(size) {
    const ret = [];
    for (let a = 0; a < size; ++a) {
        ret[a] = [];
        for (var i = 0; i < size; ++i) {
            ret[a][i] = parseInt(Math.random() * 100);
        }
    }
    return ret;
}

module.exports = random