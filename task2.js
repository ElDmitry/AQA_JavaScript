function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if (!response.ok) { 
                throw new Error('Failed to fetch');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Todos:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error.message);
            throw error;
        });
}



function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Failed to fetch');
		}
		return response.json();
	})
	.then((data) => {
		console.log('User:', data);
		return data;
	})
	.catch((error) => {
		console.error('Error:', error.message);
		throw error;
	})
}

getTodos();
getUser();



/*
Promise.all([getTodosData(), getUserData()])
	.then((todos, user) => {
		console.log('Todos:', todos);
		console.log('User:', user);
	})
	.catch((error) => {
		console.error('Error', error);
	});

Promise.race([getTodosData(), getUserData()])
	.then((result) => {
		console.log('Promise.race', result);
	})
	.catch((error) => {
		console.error('Error in Promise.race:', error);
	});
*/