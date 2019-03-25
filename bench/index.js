const range = require('ramda').range;
const Suite = require('benchmark').Suite;
const programs = require('../programs');

const src = range(0, 1e6);
const suite = new Suite();
const notifyCycle = ({ target }) => console.log(String(target));

suite
    //.add('loop', () => programs.loop(src))
    .add('Native', () => programs.native(src))
    .add('Ramda', () => programs.ramda(src))
    .add('Transducers', () => programs.transducers(src))
    .on('cycle', notifyCycle)
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
