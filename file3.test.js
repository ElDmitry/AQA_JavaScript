const axios = require('axios');
const makeCustomRequest = require('./hw3.js');

jest.mock('axios');

describe('mock request', () => {

    // Успішний запит
    test('повертає правильні дані при успішному запиті', async () => {
        const mockResponse = {
            data: {
                id: 1,
                title: 'Test'
            }
        };

        axios.get.mockResolvedValue(mockResponse);

        const mockUrl = 'https://jsonplaceholder.typicode.com/posts';
        const mockParams = { userId: 1 };
        const mockHeaders = { 'Authorization': 'Bearer testToken123' };

    
        const result = await makeCustomRequest(mockUrl, mockParams, mockHeaders);

        expect(result).toEqual(mockResponse.data);
        expect(axios.get).toHaveBeenCalledWith(mockUrl, {
            params: mockParams,
            headers: mockHeaders
        });
    });

    // Невдалий запит
    test('повертає помилку при невдалому запиті', async () => {
        const mockError = {
            response: {
                status: 404
            }
        };

        axios.get.mockRejectedValue(mockError);

        const mockUrl = 'https://jsonplaceholder.typicode.com/userst';
        const mockParams = { userId: 1 };
        const mockHeaders = { 'Authorization': 'Bearer testToken123' };

        await expect(makeCustomRequest(mockUrl, mockParams, mockHeaders))
            .rejects
            .toThrow('Error: status code 404');
    });

    // Немає відповіді від сервера
    test('повертає помилку при відсутності відповіді від сервера', async () => {
        const mockError = {
            request: {}
        };

        axios.get.mockRejectedValue(mockError);

        const mockUrl = 'https://jsonplaceholder.typicode.com/userst';
        const mockParams = { userId: 1 };
        const mockHeaders = { 'Authorization': 'Bearer testToken123' };

        await expect(makeCustomRequest(mockUrl, mockParams, mockHeaders))
            .rejects
            .toThrow('Error: No response from the server');
    });

    // Інші помилки
    test('повертає інші помилки', async () => {
        const mockError = {
            message: 'Other Error'
        };

        axios.get.mockRejectedValue(mockError);

        const mockUrl = 'https://jsonplaceholder.typicode.com/userst';
        const mockParams = { userId: 1 };
        const mockHeaders = { 'Authorization': 'Bearer testToken123' };

        await expect(makeCustomRequest(mockUrl, mockParams, mockHeaders))
            .rejects
            .toThrow('Error: Other Error');
    });

});
