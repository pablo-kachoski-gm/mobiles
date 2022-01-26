import { useFormatMessage } from 'react-intl-hooks';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/actions/actions';
import FormField from './FormField';

const AddProductForm = ({ product }) => {
  const t = useFormatMessage();
  const productColorLabel = t({ id: 'productDetails.color.label' });
  const productStorageLabel = t({ id: 'productDetails.storage.label' });
  const submitButtonText = t({ id: 'productDetails.submit.text' });
  let dispatch = useDispatch();
  const onSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const color = ev.currentTarget.color.value;
    const storage = ev.currentTarget.storage.value;
    dispatch(addProduct({ productId: product.id, color, storage }));
  };

  const {
    options: { colors, storages }
  } = product;

  return (
    <form onSubmit={onSubmit} className="product-details-form">
      <FormField label={productColorLabel} htmlFor="color">
        <select name="color" id="color">
          {colors?.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label={productStorageLabel} htmlFor="storage">
        <select name="storage" id="storage">
          {storages?.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </FormField>

      <button className="product-details-submit" type="submit">
        {submitButtonText}
      </button>
    </form>
  );
};

export default AddProductForm;
