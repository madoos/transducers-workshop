const perf = require('execution-time');

const measureExecTime = (tag, data, f) => {
    const measurePerf = perf();
    measurePerf.start(tag);
    const result = f(data);
    const results = measurePerf.stop(tag);

    return {
        tag  : tag,
        time : results.time,
        result
    };
};

module.exports = {
    measureExecTime
};
