class ServiceLogictics {
  constructor(doors = 6, price = "100 000VND", name = "truck 10") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport = (carVolume) => {
    switch (carVolume) {
      case "10":
        return ServiceLogictics();
      case "20":
        return ServiceLogictics(16, "10000000 VND", "Track 20");
    }
  };
}

ServiceLogictics.getTransport(20);
