class Observer {
  constructor(name) {
    this.name = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log("help location", location);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(Observer(Khanh));
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const doremon = new Observer("doremon");
const nobita = new Observer("nobita");

Subject.addObserver(doremon);
Subject.addObserver(nobita);

// push location
Subject.notify({ long: 123, left: 342 });
