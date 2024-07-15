class Car {
  constructor({
    name = "Ford Ranger 2024",
    doors = 4,
    price = "10 VND",
    customerInfo = {},
  } = {}) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

class ServiceLogictics {
  transportClass = Car;
  getTransport = (customerInfo = {}) => {
    return new this.transportClass(customerInfo);
  };
}

// Cách 1: Thay đổi lớp phương tiện vận chuyển của carService
const carService = new ServiceLogictics();
carService.transportClass = Car;
console.log(carService.getTransport({ customerInfo: { name: "Customer A" } }));

// Cách 2: Kế thừa và mở rộng lớp ServiceLogictics
class CarService extends ServiceLogictics {
  transportClass = Car;
}

const truckService = new CarService();
console.log(
  truckService.getTransport({ customerInfo: { name: "Customer B" } })
);

// Kết quả mẫu in ra
// Car { name: 'Ford Ranger 2024', doors: 4, price: '10 VND', customerInfo: { name: 'Customer A' } }
// Car { name: 'Ford Ranger 2024', doors: 4, price: '10 VND', customerInfo: { name: 'Customer B' } }
