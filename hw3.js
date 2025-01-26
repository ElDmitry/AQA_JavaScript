const axios = require('axios');

async function mockRequest(url, params, headers) {
    try {
        const response = await axios.get(url, {
            params: params,
            headers: headers
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Error: status code ${error.response.status}`);
        } else if (error.request) {
            throw new Error('Error: No response from the server');
        } else {
            throw new Error(`Error: ${error.message}`);
        }
    }
}

module.exports = mockRequest;
