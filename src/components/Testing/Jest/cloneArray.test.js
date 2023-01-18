const cloneArray = require('./cloneArray')

test('Properly clones Array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toStrictEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})