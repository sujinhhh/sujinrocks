function Card({ props, clickBt }) {
  return (
    <div className="card-list__card" onClick={() => clickBt(props.cardIndex)}>
      <h1>name :{props.name} </h1>
      <p>job :{props.job}</p>
    </div>
  );
}

export default Card;
