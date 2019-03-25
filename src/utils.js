const arrayPush = (acc, val) => {
    acc.push(val);
    return acc;
};

const arrayConcat = (acc, val) => acc.concat(val);

module.exports = {
    arrayPush,
    arrayConcat
};
