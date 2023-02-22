
// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    // import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // test the function
    expect(fromEuroToDollar(1)).toBe(1.2); // 1 euro is 1.2 dollars
})

test("One dollar should be 106.58333333333334 yen", function(){
    // import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    
    // test the function
    expect(fromDollarToYen(1)).toBe(106.58333333333334); // 1 dolar is 106.58333333333334 yen
})

test("One yen should be 0.006254886630179828 libras", function(){
    // import the function from app.js
    const { fromYenToPound } = require('./app.js');
    
    // test the function
    expect(fromYenToPound(1)).toBe(0.006254886630179828); // 1 yen 0.006254886630179828 libras
})