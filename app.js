// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar (eur){
    let  dolar = eur * oneEuroIs.USD
    return dolar;
};


function fromDollarToYen (us){
    let  yen = us/oneEuroIs.USD * oneEuroIs.JPY
    return yen;
};


function fromYenToPound (y){
     libras = y / oneEuroIs.JPY * oneEuroIs.GBP;
    return libras;
};
console.log(fromDollarToYen(1));

module.exports = { sum,
fromEuroToDollar,
fromDollarToYen,
fromYenToPound };


