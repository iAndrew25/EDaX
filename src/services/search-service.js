import fetch from '../commons/fetch';
import {appendParams} from '../commons/utils';

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

export const getMonumentById = monumentId => fetch(`/get-monument?monumentId=${monumentId}`);