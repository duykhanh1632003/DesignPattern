class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.year = builder.year;
    this.color = builder.color;
    this.price = builder.price;
  }

  display() {
    console.log(
      `Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`
    );
  }
}

class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  setYear(year) {
    this.year = year;
    return this; // Return this to allow method chaining
  }

  setColor(color) {
    this.color = color;
    return this; // Return this to allow method chaining
  }

  setPrice(price) {
    this.price = price;
    return this; // Return this to allow method chaining
  }

  build() {
    return new Car(this);
  }
}

// Sử dụng Builder để tạo đối tượng Car
const car = new CarBuilder("Toyota", "Camry")
  .setYear(2024)
  .setColor("Red")
  .setPrice("30,000 USD")
  .build();

car.display(); // Car: Toyota Camry, Year: 2024, Color: Red, Price: 30,000 USD

// Ưu điểm của Mẫu thiết kế Builder
// Dễ đọc và dễ hiểu: Mẫu Builder giúp mã dễ đọc và dễ hiểu hơn, đặc biệt khi khởi tạo các đối tượng phức tạp.
// Tính linh hoạt: Cho phép bạn khởi tạo đối tượng từng bước và chỉ định các giá trị tùy chọn, do đó linh hoạt hơn so với việc sử dụng một hàm khởi tạo với nhiều tham số.
// Tránh constructor phình to: Khi một lớp có nhiều thuộc tính, việc sử dụng Builder sẽ giúp tránh việc phải tạo ra một hàm khởi tạo với quá nhiều tham số.
// Nhược điểm của Mẫu thiết kế Builder
// Phức tạp hơn cho các đối tượng đơn giản: Đối với các đối tượng đơn giản, việc sử dụng Builder có thể làm mã trở nên phức tạp không cần thiết.
// Tăng số lượng lớp và mã: Việc thêm một lớp Builder riêng biệt sẽ làm tăng số lượng lớp và mã cần quản lý.
