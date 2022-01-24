import { useFormatMessage } from 'react-intl-hooks';
import './notFound.css';

const NotFound = () => {
  const t = useFormatMessage();
  const pageTitle = t({ id: 'notFound.title' });
  return <h2 className="not-found-content">{pageTitle}</h2>;
};
export default NotFound;
