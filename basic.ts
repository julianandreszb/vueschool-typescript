let firstName = '';

let firstNameExplicit: string = ''

let arrayString = ['julian', 'zapata'];
let arrayStringExplicit: string[] = ['julian', 'zapata'];

function sum(x: number, y: number): number {
    let firstName = '';
    return x + y;
}

function sumDestructuring({x, y}: { x: number, y: number }): number {
    return x + y;
}

// Parameter of "any" type and a function that returns void
function logVar(varToLog: any): void {
    console.log(varToLog);
}

// Optional parameter
function greet(name?: string) {
    console.log(name ? `hello ${name}` : `hello stranger`);
}

// Union
let booleanOrString: string | boolean = 'I could change';
booleanOrString = true;

// Literal types
function setProductSize(size: 'small' | 'medium' | 'large') {
    console.log(size);
}

// Type aliases
type Sizes = 'small' | 'medium' | 'large';

function setProductSize2(size: Sizes) {
    console.log(size);
}

type Product = {
    name: string,
    price?: number
}

const tShirt: Product = {
    name: "T-shirt design A",
    price: 100
}

const tShirt2: Product = {
    name: "T-shirt design B"
}

// Interfaces
interface InventoryItem {
    name: string,
    price: number,
}

interface Product2 extends InventoryItem {
    color?: string,
}

interface Service extends InventoryItem {
    startTime: Date,
    endTime: Date,
}

const tShirt3: Product2 = {
    name: 'T-Shirt Design C',
    price: 12
}
const photoShoot: Service = {
    startTime: new Date('May 9, 2009 11:00:00'),
    endTime: new Date('May 9, 2009 12:00:00'),
    name: 'Kelly Wedding Photo Shoot',
    price: 450
}

// Enum
enum SizesDefault {
    small,
    medium,
    large
}
enum SizesOfStrings {
    small= 'thisIsSmall',
    medium ='thisIsMedium',
    large = 'thisIsLarge'
}