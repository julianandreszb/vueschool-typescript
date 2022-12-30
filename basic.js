var firstName = '';
var firstNameExplicit = '';
var arrayString = ['julian', 'zapata'];
var arrayStringExplicit = ['julian', 'zapata'];
function sum(x, y) {
    return x + y;
}
function sumDestructuring(_a) {
    var x = _a.x, y = _a.y;
    return x + y;
}
// Parameter of "any" type and a function that returns void
function logVar(varToLog) {
    console.log(varToLog);
}
// Optional parameter
function greet(name) {
    console.log(name ? "hello ".concat(name) : "hello stranger");
}
// Union
var booleanOrString = 'I could change';
booleanOrString = true;
// Literal types
function setProductSize(size) {
    console.log(size);
}
function setProductSize2(size) {
    console.log(size);
}
var tShirt = {
    name: "T-shirt design A",
    price: 100
};
var tShirt2 = {
    name: "T-shirt design B"
};
var tShirt3 = {
    name: 'T-Shirt Design C',
    price: 12
};
var photoShoot = {
    startTime: new Date('May 9, 2009 11:00:00'),
    endTime: new Date('May 9, 2009 12:00:00'),
    name: 'Kelly Wedding Photo Shoot',
    price: 450
};
// Enum
var SizesDefault;
(function (SizesDefault) {
    SizesDefault[SizesDefault["small"] = 0] = "small";
    SizesDefault[SizesDefault["medium"] = 1] = "medium";
    SizesDefault[SizesDefault["large"] = 2] = "large";
})(SizesDefault || (SizesDefault = {}));
var SizesOfStrings;
(function (SizesOfStrings) {
    SizesOfStrings["small"] = "thisIsSmall";
    SizesOfStrings["medium"] = "thisIsMedium";
    SizesOfStrings["large"] = "thisIsLarge";
})(SizesOfStrings || (SizesOfStrings = {}));
