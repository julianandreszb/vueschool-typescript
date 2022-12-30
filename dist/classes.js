var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
class InventoryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    buy() {
        alert(this.price);
        return this;
    }
}
class Product extends InventoryItem {
    constructor() {
        super(...arguments);
        this.color = 'gray';
    }
}
class Service extends InventoryItem {
    constructor(name, price, startTime, endTime) {
        super(name, price);
        this.startTime = startTime;
        this.endTime = endTime;
    }
    emailBody() {
        return `Thank you for purchasing ${this.name}. Your appointment starts at ${this.startTime} and ends at ${this.endTime}`;
    }
    emailSubject() {
        return `${this.name} | My Company`;
    }
}
function sendEmail(emailable, to) {
    console.log('Body:', emailable.emailBody());
    console.log('Subject:', emailable.emailSubject());
    console.log('To:', to);
}
const tShirtUnique1 = new Product('TShirt Design B', 18);
tShirtUnique1.size = Sizes.medium;
tShirtUnique1.color = 'green';
tShirtUnique1.buy();
const photoShoot = new Service('Kelly Wedding Photo Shoot', 450, new Date('May 9, 2009 11:00:00'), new Date('May 9, 2009 12:30:00'));
photoShoot.buy();
sendEmail(photoShoot, 'daniel@vueschool.io');
