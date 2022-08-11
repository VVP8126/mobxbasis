import { makeAutoObservable } from 'mobx';

class NumberStore {
    num = 3;
    constructor() {
        makeAutoObservable(this); // In this place the state of class becomes observable
    }
    increment() {
        this.num = this.num + 1;
    }
    decrement() {
        this.num = this.num - 1;
    }
    add(x) {
        this.num = this.num + x;
    }
    sub(x) {
        this.num = this.num - x;
    }
}

export default new NumberStore();
