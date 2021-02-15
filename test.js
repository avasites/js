const  Maybe  = require('./maybe');

const ret = new Maybe(false)
    .map(x => new Date(x))
    .map(x => x.getTime())
    .map(x => x - Date.now())
    .chain(x => x/1000);

console.log(ret);
