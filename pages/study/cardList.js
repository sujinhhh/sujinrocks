import { useState, useEffect } from "react";
import Router from "next/router";
import Card from "../../components/card";
import axios from "axios";

function CardList() {
  const [inputVal, setInputVal] = useState({
    name: "",
    job: "",
  });
  const [cardList, setCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState("");

  const getJsonData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setCardList(response.data))
      .catch((err) => console.log(err));
  };

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

    // if (inputVal.name !== null && inputVal.job !== null) {
    //   setCardList(
    //     cardList.map((item) =>
    //       item.cardIndex == id
    //         ? {
    //             name: inputVal.name,
    //             job: inputVal.job,
    //           }
    //         : item
    //     )
    //   );
    // }
    let updateObj = {
      name: inputVal.name,
    };
    axios({
      url: "https://jsonplaceholder.typicode.com/users/" + id,
      method: "put",
      data: updateObj,
    }).then((res) => console.log(res.data));

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

  useEffect(() => {
    getJsonData();
  }, [selectedCard]);

  const handleClick = (index) => {
    setSelectedCard(index);
    Router.push(`/card_detail`);
    // .then(() => window.scrollTo(0.0));
  };

  return (
    <section className="card-list">
      <h1>Card List</h1>
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
    </section>
  );
}

export default CardList;
