import { useState, useEffect } from "react";
import Card from "../components/card";

function cardList() {
  const [inputVal, setInputVal] = useState({
    name: "",
    job: "",
  });
  const [cardList, setCardList] = useState([
    { name: "sujin", job: "programmer", cardIndex: 1 },
    { name: "bts", job: "singer", cardIndex: 2 },
    { name: "sister Lee", job: "service master", cardIndex: 3 },
  ]);
  const [selectedCard, setSelectedCard] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setInputVal({
      ...inputVal,
      // 밑에 "name"
      [name]: value,
    });
  };

  const resetInput = () => {
    setInputVal({
      name: "",
      job: "",
    });
  };

  const handleUpdate = (id) => {
    console.log(inputVal.name);

    if (inputVal.name !== null && inputVal.job !== null) {
      setCardList(
        cardList.map((item) =>
          item.cardIndex == id
            ? {
                name: inputVal.name,
                job: inputVal.job,
              }
            : item
        )
      );
    }
    resetInput();
  };
  const handleAdd = () => {
    let newObj = {
      cardIndex: cardList.length + 1,
      name: inputVal.name,
      job: inputVal.job,
    };
    setCardList(cardList.concat(newObj));
  };
  const handleDelete = (id) => {
    // if(selectedCard !== undefined) alert('card 없음')
    setCardList(cardList.filter((item) => item.cardIndex !== id));
  };

  useEffect(() => {}, [selectedCard]);

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
            <Card
              key={index}
              props={item}
              clickBt={handleClick}
              del={handleDelete}
              edit={handleUpdate}
            />
          ))}
      </div>
      <input
        type="text"
        name="name"
        value={inputVal.name}
        onChange={handleChangeInput}
        placeholder="name"
      />
      <input
        type="text"
        name="job"
        value={inputVal.job}
        onChange={handleChangeInput}
        placeholder="job"
      />
      <button onClick={handleAdd}>Add</button>
    </section>
  );
}

export default cardList;
