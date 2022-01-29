import { useFormatMessage, useFormatNumber } from 'react-intl-hooks';
import Field from './Field';

const Description = ({ product }) => {
  const tn = useFormatNumber();
  const t = useFormatMessage();

  const modelLabel = t({ id: 'productDetails.model.label' });
  const brandLabel = t({ id: 'productDetails.brand.label' });
  const weightLabel = t({ id: 'productDetails.weight.label' });
  const dimentionsLabel = t({ id: 'productDetails.dimentions.label' });
  const priceLabel = t({ id: 'productDetails.price.label' });

  const { model, brand, price, weight, dimentions } = product;
  const formmatedPrice = tn(price, { style: 'currency', currency: 'EUR' });
  return (
    <div className="product-details-column-details-description">
      <Field className="model" label={modelLabel}>
        {model}
      </Field>
      <Field className="brand" label={brandLabel}>
        {brand}
      </Field>
      <Field className="weight" label={weightLabel}>
        {weight}
      </Field>
      <Field className="dimentions" label={dimentionsLabel}>
        {dimentions}
      </Field>
      <Field className="price" label={priceLabel}>
        {formmatedPrice}
      </Field>
    </div>
  );
};
export default Description;
