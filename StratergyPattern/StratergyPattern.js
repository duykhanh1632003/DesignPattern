function dayPrice(originalPrice) {
  return originalPrice * 0.6;
}

function backFriday(originalPrice) {
  return originalPrice * 0.7;
}

const getPriceStrategies = {
  dayPrice,
  backFriday,
  default: dayPrice,
};

function getPrice(originalPrice, typPromotion = "default") {
  const strategy =
    getPriceStrategies[typPromotion] || getPriceStrategies.default;
  return strategy(originalPrice);
}

// Ví dụ sử dụng:
const originalPrice = 100;
console.log("Giá ngày thường:", getPrice(originalPrice, "dayPrice")); // Giá ngày thường: 60
console.log("Giá ngày Black Friday:", getPrice(originalPrice, "backFriday")); // Giá ngày Black Friday: 70
console.log("Giá mặc định:", getPrice(originalPrice)); // Giá mặc định: 60

// Thử nghiệm với một loại khuyến mãi không tồn tại
console.log(
  "Giá cho khuyến mãi không tồn tại:",
  getPrice(originalPrice, "nonExistentPromotion")
); // Giá cho khuyến mãi không tồn tại: 60

// Ưu điểm của Mẫu thiết kế Chiến lược
// Tính mở rộng cao: Dễ dàng thêm các chiến lược khuyến mãi mới mà không cần thay đổi mã hiện có.
// Tính linh hoạt: Các chiến lược có thể được thay đổi một cách linh hoạt tại thời điểm chạy.
// Dễ bảo trì: Tách riêng các thuật toán khuyến mãi giúp mã dễ đọc và dễ bảo trì hơn.
// Nhược điểm của Mẫu thiết kế Chiến lược
// Tăng số lượng lớp hoặc hàm: Mỗi chiến lược mới yêu cầu một hàm hoặc lớp riêng biệt, có thể dẫn đến việc tăng số lượng mã cần quản lý.
// Phức tạp hơn cho các chiến lược đơn giản: Đối với các chiến lược rất đơn giản, mẫu thiết kế này có thể trở nên quá phức tạp so với yêu cầu thực tế.
