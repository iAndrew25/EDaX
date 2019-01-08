import {API_URL} from './endpoints';

export default url => fetch(`${API_URL}${url}`, {
	headers: {
		'Content-Type': 'application/json'
	}
}).then(b => b.json());