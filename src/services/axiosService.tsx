import axios from 'axios';
import urls from '../config/urls';

export const currencyAPI = axios.create({
  baseURL: urls.currency.base,
});

export const transactionAPI = axios.create({
  baseURL: urls.transaction.base,
});
