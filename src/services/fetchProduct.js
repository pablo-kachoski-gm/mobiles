import { config } from '../common/config';
import { headers } from './constants';

const baseURL = [config.apiBaseURL, 'api'].join('/');

const fetchProduct = async (id) => {
  const endpoint = [baseURL, 'product', id].join('/');
  const response = await fetch(endpoint, { headers });
  if (!response.ok) {
    throw new Error(response);
  }
  return await response.json();
};
export default fetchProduct;
