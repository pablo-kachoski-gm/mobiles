const Field = ({ label, children, className, ...rest }) => {
  const baseClassName = 'product-detail-description-item';
  const fullClassName = [baseClassName, className].join(' ');

  return (
    <div className={fullClassName} {...rest}>
      <span className="label">{label}</span>
      <span className="value">{children}</span>
    </div>
  );
};

export default Field;
