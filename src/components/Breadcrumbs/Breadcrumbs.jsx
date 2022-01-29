import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const location = useLocation();
  const { productDetails } = useSelector((state) => state.productDetailsReducer);
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames?.length <= 1) return null;

  return (
    <div {...props}>
      {pathnames
        .map((value, index) => {
          const isLastPath = index === pathnames.length - 1;
          const linkRoute = `/${pathnames.slice(0, index + 1).join('/')}`;
          const itemValue = isLastPath ? productDetails?.model : value;

          return isLastPath ? (
            <span key={index}>{itemValue}</span>
          ) : (
            <Link to={linkRoute} key={linkRoute}>
              {itemValue}
            </Link>
          );
        })
        .reduce((prev, curr) => [prev, ' > ', curr])}
    </div>
  );
};
export default Breadcrumbs;
