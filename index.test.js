const convertRomain = require('./index');

test('Test success  case 1', () => {
    //arrange and act
    var result = convertRomain("XXI");

    //assert
    expect(result).toBe(21);
});

test('Test success  case 2', () => {
    //arrange and act
    var result = convertRomain("XL");

    //assert
    expect(result).toBe(40);
});

test('Test success  8 letters', () => {
    //arrange and act
    var result = convertRomain("MMMCMXCIX");

    //assert
    expect(result).toBe(3999);
});

test('Test success  case 3', () => {
    //arrange and act
    var result = convertRomain("LVIII");

    //assert
    expect(result).toBe(58);
});

test('Test failed with letters not valid', () => {
    //arrange and act
    var result = convertRomain("XXKI");

    //assert
    expect(result).toBe(false);
});

test('Test failed with uppercase/lowercase', () => {
    //arrange and act
    var result = convertRomain("xXI");

    //assert
    expect(result).toBe(21);
});

test('Test failed with letters disordered ', () => {
    //arrange and act
    var result = convertRomain("CHIWX");

    //assert
    expect(result).toBe(false);
});

