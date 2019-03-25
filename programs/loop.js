const program = xs => {
    let result = 0;

    for (let i = 0; i <= xs.length; i++) {
        let n = xs[i] * 2;
        n = n * n;
        if (n % 2 === 0) {
            result = n + 1 + result;
        }
    }

    return result;
};

module.exports = program;
