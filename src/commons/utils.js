export const appendParams = (url, params) => {
	let isFirst = true;

	return url + params.reduce((total, {key, value}) => {
		if(value) {
			if(isFirst) {
				total += `?${key}=${value}`;
				isFirst = false;
			} else {
				total += `&${key}=${value}`;				
			}
		}

		return total;
	}, '');
}