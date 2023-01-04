const cloneArray = require('./cloneArray')

test('Properly clones Array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).to(array)
    expect(cloneArray(array)).not.toBe(array)
})