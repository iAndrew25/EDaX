import fetch from '../config/fetch';
import {appendParams} from '../utils';

export const getMonuments = (searchedTerm, type, ethnicity, owner, dating, area) => {
	return fetch(appendParams(`/get-monuments`, [{
		key: 'searchedTerm',
		value: searchedTerm
	}, {
		key: 'type',
		value: type
	}, {
		key: 'ethnicity',
		value: ethnicity
	}, {
		key: 'owner',
		value: owner
	}, {
		key: 'dating',
		value: dating
	}, {
		key: 'area',
		value: area
	}]));
}

export const getFiltersConfig = () => fetch(`/get-filters-config`);