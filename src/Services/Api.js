import axios from 'axios';

// Base URL of your .NET Core Web API
export const apiClient = axios.create({
    baseURL: 'http://localhost:5093/Api', // Adjust this URL based on your .NET Core API
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds timeout
});

// Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Optionally add Authorization token here
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API error:', error.response);
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access
            alert('Session expired. Please log in again.');
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;
