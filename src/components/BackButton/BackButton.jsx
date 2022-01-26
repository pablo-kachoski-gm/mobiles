import { useNavigate } from 'react-router-dom';
import './backButton.css';
const BackButton = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={onBackButtonClick}>
      {'<'}
    </button>
  );
};
export default BackButton;
