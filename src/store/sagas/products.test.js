import { runSaga } from 'redux-saga';
import { onGetProducts, onGetProductDetails, onAddProduct } from './products';
import { fetchProducts, fetchProduct, addProduct } from '../../services';
import {
  getProductsSuccess,
  getProductsError,
  getProductDetailsSuccess,
  getProductDetailsError,
  addProductSuccess,
  addProductError
} from '../actions/actions';

jest.mock('../../services');

describe('onGetProducts service', () => {
  describe('onGetProducts success', () => {
    let fetchProductsMock;
    beforeEach(() => {
      fetchProductsMock = fetchProducts.mockReturnValue([]);
    });

    it('should call API and dispatch success action', async () => {
      const dispatched = [];
      await runSaga({ dispatch: (action) => dispatched.push(action) }, onGetProducts).toPromise();
      expect(fetchProductsMock).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([getProductsSuccess([])]);
    });

    afterEach(() => {
      fetchProductsMock.mockClear();
    });
  });

  describe('onGetProducts error', () => {
    let fetchProductsMock;
    beforeEach(() => {
      fetchProductsMock = fetchProducts.mockImplementation(() => Promise.reject('error'));
    });

    it('should call API and dispatch success action', async () => {
      const dispatched = [];
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action)
        },
        onGetProducts
      ).toPromise();
      expect(fetchProductsMock).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([getProductsError('error')]);
    });

    afterEach(() => {
      fetchProductsMock.mockClear();
    });
  });
});

describe('onGetProductDetails service', () => {
  describe('onGetProductDetails success', () => {
    let fetchProductMock;
    beforeEach(() => {
      fetchProductMock = fetchProduct.mockReturnValue([]);
    });

    it('should call API and dispatch success action', async () => {
      const dispatched = [];
      await runSaga({ dispatch: (action) => dispatched.push(action) }, onGetProductDetails, {
        payload: { id: 1 }
      }).toPromise();
      expect(fetchProductMock).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([getProductDetailsSuccess([])]);
    });

    afterEach(() => {
      fetchProductMock.mockClear();
    });
  });

  describe('onGetProductDetails error', () => {
    let fetchProductMock;
    beforeEach(() => {
      fetchProductMock = fetchProduct.mockImplementation(() => Promise.reject('error'));
    });

    it('should call API and dispatch success action', async () => {
      const dispatched = [];
      await runSaga({ dispatch: (action) => dispatched.push(action) }, onGetProductDetails, {
        payload: { id: 1 }
      }).toPromise();
      expect(fetchProductMock).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([getProductDetailsError('error')]);
    });

    afterEach(() => {
      fetchProductMock.mockClear();
    });
  });
});
describe('onAddProduct service', () => {
  describe('onAddProduct success', () => {
    let addProductMock;
    beforeEach(() => {
      addProductMock = addProduct.mockReturnValue([]);
    });

    it('should call API and dispatch success action', async () => {
      const dispatched = [];
      await runSaga({ dispatch: (action) => dispatched.push(action) }, onAddProduct, {
        payload: {
          productId: 1,
          color: 'red',
          storage: '64'
        }
      }).toPromise();
      expect(addProductMock).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([addProductSuccess([])]);
    });

    afterEach(() => {
      addProductMock.mockClear();
    });
  });

  describe('onAddProduct error', () => {
    let addProductMock;
    beforeEach(() => {
      addProductMock = addProduct.mockImplementation(() => Promise.reject('error'));
    });

    it('should call API and dispatch success action', async () => {
      const dispatched = [];
      await runSaga({ dispatch: (action) => dispatched.push(action) }, onAddProduct, {
        payload: {
          productId: 1,
          color: 'red',
          storage: '64'
        }
      }).toPromise();
      expect(addProductMock).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([addProductError('error')]);
    });

    afterEach(() => {
      addProductMock.mockClear();
    });
  });
});
