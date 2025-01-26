const axios = require('axios');

async function customRequest(url, params, headers) {
    try {
        const response = await axios.get(url, {
            params: params,
            headers: headers
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

module.exports = customRequest;
