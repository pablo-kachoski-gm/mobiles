import { useFormatMessage } from 'react-intl-hooks';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/actions/actions';
import Field from './Field';

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
      <Field label={productColorLabel} htmlFor="color">
        <select name="color" id="color">
          {colors?.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </Field>
      <Field label={productStorageLabel} htmlFor="storage">
        <select name="storage" id="storage">
          {storages?.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </Field>
      <div className="product-details-form-actions">
        <button className="product-details-form-actions-submit" type="submit">
          {submitButtonText}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
