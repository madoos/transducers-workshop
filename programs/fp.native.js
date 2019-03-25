const program = xs =>
    xs
        .map(n => n * 2)
        .map(n => n * n)
        .filter(n => n % 2 === 0)
        .map(n => n + 1)
        .reduce((a, b) => a + b, 0);

module.exports = program;
