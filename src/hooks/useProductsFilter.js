import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export function useProductsFilter() {
  const { products, loadingProducts } = useSelector((state) => state.productsReducer);
  const [filteredData, setFilteredData] = useState([]);
  const filterProducts = debounce((query) => {
    if (!products) return;
    if (!query && query.length === 0) return setFilteredData(products);
    setFilteredData(
      products.filter(({ brand, model }) =>
        [brand, model].some((item) => item.toLowerCase().includes(query.toLowerCase()))
      )
    );
  }, 500);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  useEffect(() => {
    return () => filterProducts.cancel();
  }, [filterProducts]);

  return { filteredData, filterProducts, loading: loadingProducts };
}
