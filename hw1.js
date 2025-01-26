const axios = require('axios');

async function invalidLink() {
    try {
        const response = await axios("https://jsonplaceholder.typicode.com/userst");
        return response.data;
    } catch (error) {
        if (error.response) {
            return `Error: status code ${error.response.status}`;
        } else if (error.request) {
            return 'Error: No response from the server';
        } else {
            return `Error: ${error.message}`;
        }
    }
}

module.exports = invalidLink;
