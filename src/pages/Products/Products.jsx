import { useEffect } from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import { useDispatch } from 'react-redux';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Products } from '../../components/Products';
import { useProductsFilter } from '../../hooks/useProductsFilter';
import { getProducts } from '../../store/actions/actions';
import './products.css';

const ProductsPage = () => {
  const t = useFormatMessage();
  let dispatch = useDispatch();
  const { filteredData, filterProducts, loading } = useProductsFilter();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const pageTitle = t({ id: 'products.title' });
  const searchProductsPlaceholder = t({ id: 'products.search.placeholder' });

  return (
    <PageContainer>
      <div className="products-page-header">
        <span>{pageTitle}</span>
        <input
          className="products-page-header-search"
          type="text"
          placeholder={searchProductsPlaceholder}
          onChange={(event) => filterProducts(event.target.value)}
        />
      </div>
      <Products products={filteredData} loading={loading} />
    </PageContainer>
  );
};
export default ProductsPage;
