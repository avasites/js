class Monada{

    constructor(val) {
        this.val = val;
    };

    static of(val){
        return new Monada(val);
    };

    map(f){
        return Monada.of(f(this.val));
    };

    join(){
        return this.val;
    };

    chain(f){
        return this.map(f).join();
    };

    ap(someOtherMonad) {
        return someOtherMonad.map(this.val);
    }
}