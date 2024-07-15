class ServiceLogictics {
  constructor(doors = 6, price = "100 000VND", name = "truck 10") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }

  static getTransport(carVolume) {
    switch (String(carVolume)) {
      case "10":
        return new ServiceLogictics();
      case "20":
        return new ServiceLogictics(16, "10 000 000 VND", "truck 20");
      default:
        return new ServiceLogictics(); // Return a default object if none match
    }
  }
}

// Ví dụ sử dụng
const transport1 = ServiceLogictics.getTransport(10);
console.log(transport1); // ServiceLogictics { name: 'truck 10', doors: 6, price: '100 000VND' }

const transport2 = ServiceLogictics.getTransport(20);
console.log(transport2); // ServiceLogictics { name: 'truck 20', doors: 16, price: '10 000 000 VND' }

const transportDefault = ServiceLogictics.getTransport(30);
console.log(transportDefault); // ServiceLogictics { name: 'truck 10', doors: 6, price: '100 000VND' }
