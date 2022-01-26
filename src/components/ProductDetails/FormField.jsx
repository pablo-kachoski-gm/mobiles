const FormField = ({ label, children, htmlFor }) => {
  return (
    <div className="product-details-form-field">
      <label htmlFor={htmlFor} className="product-details-form-field-label">
        {label}
      </label>
      <div className="product-details-form-field-item">{children}</div>
    </div>
  );
};

export default FormField;
