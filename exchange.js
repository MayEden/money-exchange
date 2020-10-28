const Money = require("money-exchange");

// Print result of money exchange
const exchange = async (arr) => {
    const fx = new Money();
    await fx.init();
     
    const CONVERT_FROM = arr[0];
    const CONVERT_TO = arr[1];

    for(let i = 2; i < arr.length; i++) {
        let moneyValue = arr[i]; 
        console.log(fx.convert(moneyValue, CONVERT_FROM, CONVERT_TO));
    }
}

module.exports = exchange;