import { config } from '../common/config';
import { headers } from './constants';

const baseURL = [config.apiBaseURL, 'api'].join('/');

const fetchProducts = async () => {
  const endpoint = [baseURL, 'product'].join('/');
  const response = await fetch(endpoint, { headers });
  if (!response.ok) {
    throw new Error(response);
  }
  return await response.json();
};
export default fetchProducts;
