const Card = ({ user, onChangeName, children }) => {
  const { name, phone } = user;

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{phone}</h3>
      <input type="text" onChange={onChangeName} value={name} />
      <button className="app--button app--button__delete">Delete</button>
      {children}
    </div>
  );
};

export default Card;
