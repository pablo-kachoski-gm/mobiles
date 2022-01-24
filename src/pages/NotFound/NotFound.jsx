import { useFormatMessage } from 'react-intl-hooks';
import PageContainer from '../../components/PageContainer/PageContainer';
import './notFound.css';

const NotFoundPage = () => {
  const t = useFormatMessage();
  const pageTitle = t({ id: 'notFound.title' });
  return (
    <PageContainer>
      <h2 className="not-found-content">{pageTitle}</h2>
    </PageContainer>
  );
};
export default NotFoundPage;
