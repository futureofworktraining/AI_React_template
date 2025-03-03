// authProvider.js

// This authProvider is designed for a simple admin user.
// In a real application, you would integrate with a proper authentication system.

const authProvider = {
    login: ({ username, password }) => {
        localStorage.removeItem('token');
        return fetch('/users?username=' + username + '&password=' + password)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(users => {
                if (users.length > 0) {
                    localStorage.setItem('token', 'admin'); // Store a token in local storage
                    return Promise.resolve();
                } else {
                    return Promise.reject(new Error('Invalid username or password'));
                }
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        return localStorage.getItem('token') ? Promise.resolve('admin') : Promise.reject();
    },
    getUserIdentity: () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return Promise.reject(new Error('No token found'));
            }

            // Simulate fetching user data based on the token.  In a real application,
            // you would decode the token or make an API call to get the user's information.
            return Promise.resolve({
                id: 'admin',
                fullName: 'Admin User',
                avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50', // Replace with a URL to an actual avatar
                permissions: 'admin',
            });
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

export default authProvider;