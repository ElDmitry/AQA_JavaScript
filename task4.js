class Todos {
    async fetchTodos() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Failed');
            }
            const data = await response.json();
            console.log('Todos:', data);
            return data;
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
    }
}

class User {
    async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) {
                throw new Error('Failed');
            }
            const data = await response.json();
            console.log('User:', data);
            return data;
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
    }
}
const todosData = new Todos();
const userData = new User();

todoService.fetchTodos();
userService.fetchUser();
