function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

// ... as string = <string> ...
const netPriceOptionOne = getNetPrice(20, 10, true) as string;
const netPriceOptionTwo = <string>getNetPrice(20, 10, true);