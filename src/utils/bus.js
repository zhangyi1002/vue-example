export default class Bus {
    constructor() {
        this.callbackList = {};
    }

    $on(name, fn) {
        this.callbackList[name] = this.callbackList[name] || [];
        this.callbackList[name].push(fn);
    }

    $emit(name, args) {
        if (!this.callbackList[name]) {
            return;
        }
        this.callbackList[name].forEach(cb => cb(args));
    }
}