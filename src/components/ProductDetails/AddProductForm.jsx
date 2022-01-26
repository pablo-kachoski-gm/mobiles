import { useFormatMessage } from 'react-intl-hooks';
import FormField from './FormField';

const AddProductForm = ({ product }) => {
  const t = useFormatMessage();
  const productColorLabel = t({ id: 'productDetails.color.label' });
  const productStorageLabel = t({ id: 'productDetails.storage.label' });
  const onSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    console.log('storage', ev.currentTarget.storage.value);
    console.log('color', ev.currentTarget.color.value);
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
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
