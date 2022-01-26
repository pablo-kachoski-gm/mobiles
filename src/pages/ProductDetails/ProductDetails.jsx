import { useEffect } from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import { useDispatch } from 'react-redux';
import { getProductDetails } from '../../store/actions/actions';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../../components/ProductDetails';
import PageContainer from '../../components/PageContainer/PageContainer';
import './productDetails.css';
import BackButton from '../../components/BackButton/BackButton';

const ProductDetailsPage = () => {
  const t = useFormatMessage();

  let params = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [params.id]);

  const pageTitle = t({ id: 'productDetails.title' });
  return (
    <PageContainer>
      <div className="productDetails-page-header">
        <BackButton />
        {pageTitle}
      </div>
      <ProductDetails />
    </PageContainer>
  );
};
export default ProductDetailsPage;
