import fetch from '../config/fetch';

export const getMonuments = searchedTerm => fetch(`get-monuments?searchedTerm=${searchedTerm}`);