const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Check response GET users', async() => {
    const response = await axios.get(`${BASE_URL}/users`);
    expect (response.status).toBe(200);
    expect (response.data).not.toBeNull();
});

test('Check response GET posts', async() => {
    const response = await axios.get(`${BASE_URL}/posts`);
    expect (response.status).toBe(200);
    expect (response.data).not.toBeNull();
});

test('Check response GET comments', async() => {
    const response = await axios.get(`${BASE_URL}/posts/1/comments`);
    expect (response.status).toBe(200);
    expect (response.data).not.toBeNull();
});

test('Check response GET comments by post_id:1', async() => {
    const response = await axios.get(`${BASE_URL}/comments?postId=1`);
    expect (response.status).toBe(200);
    expect (response.data).not.toBeNull();
});

test('Check POST new comment', async() => {
    const response = await axios.post(`${BASE_URL}/posts`,params,
        {
            headers: {
                "Content-Type": "application/json"
            }
        });
        expect (response.status).toBe(201)
        expect(response.data).toMatchObject(params)
    });
    const params = {                                           
        title: 'new POST',
        body: 'This is my new POST',
        userId: 1,
}
