import { config } from '../common/config';
import { headers } from './constants';

const baseURL = [config.apiBaseURL, 'api'].join('/');

const addProduct = async ({ productId, color, storage }) => {
  const endpoint = [baseURL, 'cart'].join('/');
  const response = await fetch(endpoint, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      id: productId,
      colorCode: color,
      storageCode: storage
    })
  });
  if (!response.ok) {
    throw new Error(response);
  }
  return await response.json();
};
export default addProduct;
