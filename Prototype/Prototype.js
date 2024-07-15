class FifaOnlinePlayer {
  constructor(name, team, position, goals) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.goals = goals;
  }

  score() {
    this.goals++;
  }

  clone() {
    return new FifaOnlinePlayer(
      this.name,
      this.team,
      this.position,
      this.goals
    );
  }
}

const prototypePattern = new FifaOnlinePlayer("CR7", "Al Nassr", "FW", 0);

const cr7 = prototypePattern.clone();
const m10 = prototypePattern.clone();
m10.name = "Messi";
m10.team = "Inter Miami"; // Messi chuyển đến Inter Miami từ PSG
m10.position = "FW";
m10.goals = 0;

cr7.score();
m10.score();

console.log(cr7); // FifaOnlinePlayer { name: 'CR7', team: 'Al Nassr', position: 'FW', goals: 1 }
console.log(m10); // FifaOnlinePlayer { name: 'Messi', team: 'Inter Miami', position: 'FW', goals: 1 }
// Ưu điểm của Mẫu thiết kế Prototype
// Hiệu suất: Tạo ra một đối tượng mới từ một nguyên mẫu có thể nhanh hơn và hiệu quả hơn so với việc tạo ra từ đầu, đặc biệt khi quá trình khởi tạo đối tượng phức tạp.
// Đơn giản hóa việc khởi tạo đối tượng: Khi bạn cần nhiều đối tượng có cấu trúc tương tự nhưng có các giá trị thuộc tính khác nhau, mẫu Prototype giúp đơn giản hóa quá trình khởi tạo.
// Dễ dàng nhân bản đối tượng: Dễ dàng tạo ra bản sao của các đối tượng phức tạp mà không cần phải lặp lại mã khởi tạo.
// Nhược điểm của Mẫu thiết kế Prototype
// Khó khăn trong việc duy trì: Nếu có nhiều thay đổi trong cấu trúc đối tượng hoặc hành vi của đối tượng, bạn cần cập nhật cả nguyên mẫu và các đối tượng được tạo từ nguyên mẫu.
// Vấn đề với các thuộc tính tham chiếu: Nếu đối tượng chứa các thuộc tính là các đối tượng khác, việc nhân bản sâu (deep cloning) có thể phức tạp và đòi hỏi xử lý đặc biệt để tránh việc chia sẻ tham chiếu không mong muốn.
// Khả năng nhầm lẫn: Việc sử dụng mẫu Prototype có thể dẫn đến nhầm lẫn nếu không được thực hiện cẩn thận, vì các đối tượng được nhân bản từ một nguyên mẫu có thể không rõ ràng về nguồn gốc của chúng.
// Mẫu thiết kế Prototype là một công cụ mạnh mẽ khi được sử dụng đúng cách, nhưng cần cẩn trọng để đảm bảo rằng mã vẫn dễ hiểu và dễ duy trì.
