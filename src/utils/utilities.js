function splitPrice(price) {
    let fixedPrice = price.toFixed(2);
    let priceString = fixedPrice.toString();
    let priceSplit = priceString.split(".");
    return priceSplit;
}

function getSubTotal(items) {
    let subTotal = 0;
    for (let item of items) {
        let itemTotal = item.qty * item.price;
        subTotal += itemTotal;
    }
    return subTotal.toFixed(2);
}

export { splitPrice, getSubTotal };
