import { useEffect } from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import { useDispatch } from 'react-redux';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Products } from '../../components/Products';
import { Search } from '../../components/Search';
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
  return (
    <PageContainer>
      <div className="products-page-header">
        <span>{pageTitle}</span>
        <Search onChange={(event) => filterProducts(event.target.value)} />
      </div>
      <Products products={filteredData} loading={loading} />
    </PageContainer>
  );
};
export default ProductsPage;
