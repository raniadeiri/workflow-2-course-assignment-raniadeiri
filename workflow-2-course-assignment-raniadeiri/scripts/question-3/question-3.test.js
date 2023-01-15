const { calculateTax, convertKrone, formatDecimalSpaces, getDiscountPercentage } = require('./question-3')

test('calculateTax', () => {
    expect(calculateTax(100)).toBe(125)
})

test('calculateTax', () => {
    expect(convertKrone(10)).toBe(101.80)
})

test('formatDecimalSpaces', () => {
    expect(formatDecimalSpaces(15.5555555)).toBe(15.56)
})

test('formatDecimalSpaces', () => {
    expect(getDiscountPercentage(100, 75)).toBe(25)
})