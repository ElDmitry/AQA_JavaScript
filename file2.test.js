const axios = require('axios');
const customRequest = require('./hw2.js');

test('Correct headers', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const params = {
        userId: 1,
        query: 'test'
    };
    const headers = {
        'Authorization': 'Bearer testToken123',
        'X-Custom-Header': 'CustomHeaderValue'
    };

    const response = await customRequest(url, params, headers);
    expect(response).toBeDefined();
});
