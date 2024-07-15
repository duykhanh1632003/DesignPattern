// Các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào các trừu tượng.

// Vi phạm DIP
class LightBulb {
    turnOn() {}
    turnOff() {}
}

class Switch {
    constructor(bulb) {
        this.bulb = bulb;
    }

    operate() {
        this.bulb.turnOn();
    }
}

// Tuân thủ DIP
class Switchable {
    turnOn() {}
    turnOff() {}
}

class LightBulb extends Switchable {
    turnOn() {}
    turnOff() {}
}

class Switch {
    constructor(device) {
        this.device = device;
    }

    operate() {
        this.device.turnOn();
    }
}
