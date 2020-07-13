export class Publisher {
    constructor() {
        this.subscribes = {}; //first
    }

    get methods() {
        return {
            subscribe: this.subscribe.bind(this),
            notify: this.notify.bind(this),
            // unsubscrube
        }
    }

    isEventExist(event) {
        if (!this.subscribes[event]) {
            this.subscribes[event] = [];
        }
    }

    subscribe(event, callBack) {
        this.isEventExist(event);
        this.subscribes[event].push(callBack);
    }

    notify(event, data) {
        this.isEventExist(event);
        this.subscribes[event].forEach(func => func(data));
    }

}
