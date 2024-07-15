// Các thực thể phần mềm (classes, modules, functions, etc.) nên được mở để mở rộng nhưng đóng để sửa đổi.

// Vi phạm OCP
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  calculateArea(shape) {
    if (shape instanceof Rectangle) {
      return shape.area();
    } else if (shape instanceof Circle) {
      return shape.area();
    }
  }
}

// Tuân thủ OCP
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  calculateArea(shape) {
    return shape.area();
  }
}
