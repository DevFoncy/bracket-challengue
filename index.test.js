const isBracket = require('./index');

describe("is a valid Bracket ", () => {
    test('It returns true using 2 brackets', () => {
        expect(isBracket('{}')).toEqual(true)
    });
    
    test('It returns true using mix of letter and pair of brackets', () => {
        expect(isBracket('{kkkk{}}')).toEqual(true)
    });

    test('It returns true using mix of 2 words inside brackets', () => {
        expect(isBracket('{{gggooo}}{ll{i}}')).toEqual(true)
    });
})

describe("is not a valid Bracket ", () => {
    test('It returns false using 3 brackets', () => {
        expect(isBracket('{}{')).toEqual(false)
    });

    test('It returns false using 6 unsort brackets ', () => {
        expect(isBracket('}}}{{{')).toEqual(false)
    });

    test('It returns false with a mix a  pairs with letters using incorrect syntax', () => {
        expect(isBracket('{}{}oooo{ppp}}}')).toEqual(false)
    });
})
