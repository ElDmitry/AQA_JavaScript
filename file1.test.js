const invalidLink = require('./hw1'); 

test('Check error', async() => {
    const result = await invalidLink();
    expect(result).toBe('Error: status code 404');
});
