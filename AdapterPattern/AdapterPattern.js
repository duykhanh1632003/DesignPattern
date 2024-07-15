class MomoPaymentAdapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment;
  }

  payWithVisa(visaPayment) {
    const convertedPayment = this.convertoVisaPayment(this.momoPayment);
    visaPayment.pay();
  }

  convertoVisaPayment(momoPayment) {
    const conversionRate = 23000;
    const visaAmount = momoPayment.amount / conversionRate;
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      cvv: momoPayment.cvv,
      amount: visaAmount,
    };
    return visaPayment;
  }
}

class VisaPayment {
  pay(payment) {
    console.log("");
  }
}

class MomoPayment {
  constructor(cardNumber, expiryDate, cvv, visaAmount) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.amount = visaAmount;
  }
}
const momoPayment = new MomoPayment("12389123", "12/25", "123", 23000);
const momoAdapter = new MomoPaymentAdapter(momoPayment);
const visaPayment = new VisaPayment();
momoAdapter.payWithVisa(visaPayment);


// Ưu điểm của Mẫu thiết kế Adapter
// Khả năng tương thích: Cho phép các lớp có giao diện không tương thích làm việc cùng nhau.
// Tính tái sử dụng: Bạn có thể sử dụng lại các lớp hiện có mà không cần sửa đổi chúng.
// Tính linh hoạt: Dễ dàng thay đổi hoặc mở rộng hành vi của hệ thống mà không ảnh hưởng đến mã hiện có.
// Nhược điểm của Mẫu thiết kế Adapter
// Tăng độ phức tạp: Thêm một lớp Adapter có thể làm tăng độ phức tạp của hệ thống.
// Hiệu suất: Có thể có một số chi phí về hiệu suất do việc gọi qua lớp Adapter.
