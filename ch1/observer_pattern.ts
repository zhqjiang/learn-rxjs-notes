interface Listener {
  update: (message: string) => void;
}

const listener1: Listener = {
  update: (message: string) => {
    console.log("Listener1 received:", message);
  },
};

const listener2: Listener = {
  update: (message: string) => {
    console.log("Listener2 received:", message);
  },
};

class Producer {
  listeners: Listener[];
  constructor() {
    this.listeners = [];
  }

  add(l: Listener) {
    this.listeners.push(l);
  }

  remove(l: Listener) {
    const index = this.listeners.indexOf(l);
    this.listeners.splice(index, 1);
  }

  notify(message: string) {
    this.listeners.forEach((l) => {
      l.update(message);
    });
  }
}

const notifier = new Producer();
notifier.add(listener1);
notifier.add(listener2);
notifier.notify("Hello there!");
