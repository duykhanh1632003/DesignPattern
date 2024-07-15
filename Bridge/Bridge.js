class PaymentProcess {
  payment(amount) {
    // Default implementation or abstract method to be overridden by subclasses
    throw new Error("payment method must be overridden by subclass");
  }
}

class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiryDate, cvv) {
    super();
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  payment(amount) {
    console.log(
      `Processing Visa payment of ${amount} using card number ${this.cardNumber}`
    );
    // Add your Visa payment processing logic here
  }
}

class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }

  payment(amount) {
    console.log(
      `Processing Momo payment of ${amount} using phone number ${this.phoneNumber}`
    );
    // Add your Momo payment processing logic here
  }
}

class MemberRegistration {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  register() {
    const amount = 100;
    this.paymentProcessor.payment(amount);
  }
}

// Example usage
const visaPayment = new VisaPaymentProcess("4111111111111111", "12/24", "123");
const momoPayment = new MomoPaymentProcess("0912345678");

const memberWithVisa = new MemberRegistration(visaPayment);
memberWithVisa.register();

const memberWithMomo = new MemberRegistration(momoPayment);
memberWithMomo.register();
