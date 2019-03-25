const { measureExecTime } = require('./utils');

const {
    range,
    map,
    apply,
    tap,
    pipe,
    sortWith,
    prop,
    ascend
} = require('ramda');

const programs = require('../programs');
const src = range(0, 1e6);

const suite = [
    ['loop', src, programs.loop],
    ['native', src, programs.native],
    ['ramda', src, programs.ramda],
    ['transducers', src, programs.transducers]
];

const run = pipe(
    map(apply(measureExecTime)),
    sortWith([ascend(prop('time'))]),
    data => JSON.stringify(data, null, 2),
    tap(console.log)
);

run(suite);
