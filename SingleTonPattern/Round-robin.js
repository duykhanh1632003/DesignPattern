class RoundRobinSingleton {
  constructor() {
    if (RoundRobinSingleton.instance) {
      return RoundRobinSingleton.instance;
    }

    this.servers = [];
    this.currentIndex = 0;
    RoundRobinSingleton.instance = this;
  }

  // Thêm một server vào danh sách
  addServer(server) {
    this.servers.push(server);
  }

  // Lấy server tiếp theo theo thuật toán Round-Robin
  getNextServer() {
    if (this.servers.length === 0) {
      throw new Error("No servers available.");
    }

    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }
}
function run() {
  const roundRobin = new RoundRobinSingleton();

  roundRobin.addServer("Server 1");
  roundRobin.addServer("Server 2");
  roundRobin.addServer("Server 3");

  console.log(roundRobin.getNextServer()); // Output: Server 1
  console.log(roundRobin.getNextServer()); // Output: Server 2
  console.log(roundRobin.getNextServer()); // Output: Server 3
  console.log(roundRobin.getNextServer()); // Output: Server 1 (quay lại đầu danh sách)
  console.log(roundRobin.getNextServer()); // Output: Server 2
}

run();


// Ưu điểm của Mẫu thiết kế Singleton
// Đảm bảo chỉ có một đối tượng duy nhất: Đảm bảo rằng chỉ có một đối tượng của lớp được tạo ra, giúp tiết kiệm tài nguyên.
// Điểm truy cập toàn cục: Cung cấp một điểm truy cập toàn cục duy nhất cho các tài nguyên hoặc dịch vụ.
// Nhược điểm của Mẫu thiết kế Singleton
// Khó kiểm tra đơn vị: Singleton có thể làm cho việc kiểm tra đơn vị trở nên khó khăn do trạng thái toàn cục.
// Phá vỡ nguyên tắc trách nhiệm đơn lẻ: Singleton thường đảm nhiệm cả việc quản lý vòng đời của nó, vi phạm nguyên tắc trách nhiệm đơn lẻ.
