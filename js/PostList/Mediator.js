export class Mediator {
    subscribers = {};

    get methods() {
        return { subscribe: this.subscribe, unsubscribe: this.unsubscribe, publish: this.publish };
    }

    subscribe = (event, callbackFun) => {
        !this.subscribers[event] ? this.subscribers[event] = [] : this.subscribers[event];
        this.subscribers[event].push(callbackFun);
    }

    unsubscribe = (event, callbackFun) => {
        !this.subscribers[event] ? this.subscribers[event] = [] : this.subscribers[event];
        this.subscribers[event] = this.subscribers[event].filter((func) => func !== callbackFun);
    }

    publish = (event, data) => {
        !this.subscribers[event] ? this.subscribers[event] = [] : this.subscribers[event];
        this.subscribers[event].forEach((func) => func(data));
    }
}
