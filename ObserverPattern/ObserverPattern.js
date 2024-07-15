class Observer {
  constructor(name) {
    this.name = name;
  }

  updateStatus(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.name} is helping at location:`, location);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const doremon = new Observer("Doremon");
const nobita = new Observer("Nobita");

const subject = new Subject(); // Khởi tạo đối tượng của lớp Subject
subject.addObserver(doremon);
subject.addObserver(nobita);

// push location
subject.notify({ long: 123, left: 342 });

// Ưu điểm của Mẫu thiết kế Observer
// Tính linh hoạt và mở rộng cao: Dễ dàng thêm hoặc xóa các observer mà không cần thay đổi cấu trúc của lớp Subject.
// Tách biệt sự phụ thuộc: Lớp Subject không cần biết chi tiết về các lớp Observer, chỉ cần biết chúng thực hiện phương thức updateStatus.
// Cập nhật tự động: Các observer tự động được thông báo và cập nhật khi Subject thay đổi trạng thái.
// Nhược điểm của Mẫu thiết kế Observer
// Quản lý các observer: Có thể trở nên phức tạp khi số lượng observer lớn, cần cơ chế quản lý hiệu quả.
// Tác động hiệu suất: Nếu có quá nhiều observer, việc thông báo và cập nhật có thể làm giảm hiệu suất của hệ thống.
// Khó kiểm soát chuỗi sự kiện: Khi một sự kiện thay đổi xảy ra, việc theo dõi và gỡ lỗi các phản hồi từ nhiều observer có thể trở nên phức tạp.
