import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class GetRequest {
    constructor(url) {
        this.url = url
    };
    async request() {
        try {
            const response = await axios.get(this.url);
            return response.data;
        }
        catch(error) {
            console.error('Помилка запиту', error.message);
            throw error;
        };
    };
};

module.exports = request;

class PostRequest {
    constructor(url, params) {
        this.url = url;
        this.params = params
    };
    async request() {
        try {
            const response = await axios.post(this.url,params,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });     
            return response.data;
        }
        catch(error) {
            console.error('Помилка запиту', error.message);
            throw error;
        }
    }
}
const params = {                                            //Для запитів з параметрами
    title: 'new POST',
    body: 'This is my new POST',
    userId: 1,
}

const firstGetRequest = new GetRequest(`${BASE_URL}/users`); // Get users
firstGetRequest.request();

const secondGetRequest = new GetRequest(`${BASE_URL}/posts`); // Get posts
secondGetRequest.request()

const thirdGetRequest = new GetRequest(`${BASE_URL}/posts/1/comments`); // Get comment 
thirdGetRequest.request()

const fourthGetRequest = new GetRequest(`${BASE_URL}/comments?postId=1`); // Get comment by post_id : 1
fourthGetRequest.request()

const firstPostRequest = new PostRequest(`${BASE_URL}/posts`,params); // Запит з параметрами
firstPostRequest.request()