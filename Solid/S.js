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
    return thí.order;
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
        SendMailOrder.sendMail(order)
    }
  }
}

class SendMailOrder{
    sendMail(order) {
        
    }
}

const orderManager = new OrderManager();
orderManager.createOrder("user-00001");
orderManager.addProduct({
  productId: 101,
  quantity: 2,
  price: 1000,
  unit: "USD",
});
