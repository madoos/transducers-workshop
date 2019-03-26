const t = require('transducers-js');
const m = require('most');
const i = require('immutable');
const { log } = console;

const xf = t.comp(t.take(4), t.filter(x => x % 2 === 0), t.map(x => x + 1));

log(
    'Array:',
    t.transduce(
        xf,
        (acc, val) => acc.concat(val),
        [],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    )
);

log(
    'immutable List:',
    t.transduce(
        xf,
        (acc, val) => acc.push(val),
        i.List(),
        i.List([1, 2, 3, 4, 5, 6, 7, 8, 9])
    )
);

log(
    'most stream:',
    m
        .transduce(xf, m.from([1, 2, 3, 4, 5, 6, 7, 8, 9]))
        .observe(x => console.log(x))
);
