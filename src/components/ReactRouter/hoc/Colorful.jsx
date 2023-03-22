const Colorful = (WrappedComponent) => {
  const colors = [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
  ];

  const color = colors[Math.floor(Math.random() * colors.length - 1)];

  return (props) => {
    return (
      <div className={color}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Colorful;
