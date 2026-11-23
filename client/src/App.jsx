

import { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('Loading...');

	useEffect(() => {
		fetch('/api/health')
			.then((res) => res.json())
			.then((data) => setMessage(data.message))
			.catch(() => setMessage('Failed to connect to backend'));
	}, []);

	return <h1>{message}</h1>;
}

export default App;

