import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const UserSearch = () => {
  const [card, setCard] = useState(null);
  const [cardId, setCardId] = useState(1);

  useEffect(() => {
    if (cardId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${cardId}`)
        .then(({ data }) => {
          console.info({ data });
          setCard(data);
        })
        .catch((error) => {
          console.error({ error });
        });
    } else {
      setCard(null);
    }
  }, [cardId]);

  const changeNameHandler = ({ target: { value: newName } }) =>
    setCard((prev) => ({ ...prev, name: newName }));

  return (
    <>
      <input
        type="text"
        value={cardId}
        onChange={({ target: { value } }) => setCardId(value)}
      />
      {card && <Card user={card} onChangeName={changeNameHandler} />}
    </>
  );
};

export default UserSearch;
