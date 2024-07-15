// Mỗi module hoặc class chỉ nên đảm nhiệm một trách nhiệm duy nhất. Điều này giúp giảm sự phức tạp và dễ dàng bảo trì code.

class Order {
  constructor(userId) {
    this.userId = userId;
    this.timeOrder = Date.now();
    this.products = [];
  }
}

class OrderManager {
  constructor() {
    this.order = null;
  }

  createOrder(userId) {
    this.order = new Order(userId);
    return this.order;
  }

  addProduct(product) {
    this.order.products.push(product);
  }
  getOrder() {
    return this.order;
  }

  isValid() {
    return !!this.order.products.length;
  }

  sendOrder() {
    if (this.isValid) {
      SendMailOrder.sendMail(order);
    }
  }
}

class SendMailOrder {
  sendMail(order) {}
}

const orderManager = new OrderManager();
orderManager.createOrder("user-00001");
orderManager.addProduct({
  productId: 101,
  quantity: 2,
  price: 1000,
  unit: "USD",
});
