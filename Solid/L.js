// Các đối tượng của lớp con có thể thay thế các đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình.
// Vi phạm LSP
class Bird {
    fly() {
        console.log('I can fly');
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error('I cannot fly');
    }
}

// Tuân thủ LSP
class Bird {
    move() {
        console.log('I can move');
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log('I can fly');
    }
}

class Penguin extends Bird {
    swim() {
        console.log('I can swim');
    }
}
