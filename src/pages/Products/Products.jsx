import { useEffect } from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import { useDispatch } from 'react-redux';
import PageContainer from '../../components/PageContainer/PageContainer';
import { Products } from '../../components/Products';
import { getProducts } from '../../store/actions/actions';

const ProductsPage = () => {
  const t = useFormatMessage();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const pageTitle = t({ id: 'products.title' });

  return (
    <PageContainer>
      <div>{pageTitle}</div>
      <Products />
    </PageContainer>
  );
};
export default ProductsPage;
