let firstName = '';
let firstNameExplicit = '';
let arrayString = ['julian', 'zapata'];
let arrayStringExplicit = ['julian', 'zapata'];
function sum(x, y) {
    let firstName = '';
    return x + y;
}
function sumDestructuring({ x, y }) {
    return x + y;
}
// Parameter of "any" type and a function that returns void
function logVar(varToLog) {
    console.log(varToLog);
}
// Optional parameter
function greet(name) {
    console.log(name ? `hello ${name}` : `hello stranger`);
}
// Union
let booleanOrString = 'I could change';
booleanOrString = true;
// Literal types
function setProductSize(size) {
    console.log(size);
}
function setProductSize2(size) {
    console.log(size);
}
const tShirt = {
    name: "T-shirt design A",
    price: 100
};
const tShirt2 = {
    name: "T-shirt design B"
};
const tShirt3 = {
    name: 'T-Shirt Design C',
    price: 12
};
const photoShoot = {
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
