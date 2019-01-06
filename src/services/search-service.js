import fetch from '../config/fetch';

export const getMonuments = searchedTerm => fetch(`/get-monuments?searchedTerm=${searchedTerm}`);

export const getFiltersConfig = () => fetch(`/get-filters-config`);