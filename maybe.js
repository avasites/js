class Maybe {
    constructor(v) {
        this.value = v || 0;
    };
    map(fn){
        return new Maybe(fn(this.value))
    };
    join(){
        return this.value;
    };
    chain(fn){
        return this.map(fn).join();
    }
}

module.exports = Maybe;
