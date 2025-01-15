async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Failed to fetch todo');
        }
        const data = await response.json();
        console.log('Todo:', data);
        return data;
    } catch (error) {
        console.error('Error fetching todo:', error.message);
        throw error;
    }
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log('User:', data);
        return data;
    } catch (error) {
        console.error('Error fetching:', error.message);
        throw error;
    }
}

getTodos();
getUser();
