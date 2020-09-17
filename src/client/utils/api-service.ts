const TOKEN_KEY = 'token';

export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);

export default async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
	const headers: { [key: string]: string } = {
		'Content-Type': 'application/json'
	};

	const token = localStorage.getItem(TOKEN_KEY);

	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	try {
		const res = await fetch(uri, {
			method,
			headers,
			body: JSON.stringify(body)
		});

		if (res.ok) {
			return <T>await res.json();
		} else {
            throw new Error('Response was bad!');
        }
	} catch (error) {
		console.log(error);
	}
};
