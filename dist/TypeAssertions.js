function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
// ... as string = <string> ...
const netPriceOptionOne = getNetPrice(20, 10, true);
const netPriceOptionTwo = getNetPrice(20, 10, true);
