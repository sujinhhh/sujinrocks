import { useState, useEffect } from "react";
import Card from "../components/card";

function cardList() {
  const [inputVal, setInputVal] = useState("");
  const [cardList, setCardList] = useState([
    { name: "sujin", job: "programmer", cardIndex: 1 },
    { name: "bts", job: "singer", cardIndex: 2 },
    { name: "sister Lee", job: "service master", cardIndex: 3 },
  ]);
  const [selectedCard, setSelectedCard] = useState("");

  const handleChangeInput = (e) => {
    setInputVal(e.target.value);
  };

  const handleUpdate = () => {
    setCardList(
      cardList.map((item) =>
        item.cardIndex == selectedCard
          ? {
              ...item,
              name: inputVal,
            }
          : item
      )
    );
  };

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <section className="card-list">
      <h1>Card List</h1>
      <div className="card-list__container">
        {cardList
          //   .filter((item) => inputVal && item.name === inputVal)
          .map((item, index) => (
            <Card key={index} props={item} clickBt={handleClick} />
          ))}
      </div>
      <input type="text" value={inputVal} onChange={handleChangeInput} />
      <button onClick={handleUpdate}>Click</button>
    </section>
  );
}

export default cardList;
