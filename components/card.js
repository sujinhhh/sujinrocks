function Card({ props, clickBt, del, edit }) {
  return (
    <div className="card-list__card" onClick={() => clickBt(props.cardIndex)}>
      <h1>name :{props.name} </h1>
      <p>job :{props.job}</p>
      <button onClick={() => del(props.cardIndex)}>Delete</button>
      <button onClick={() => edit(props.cardIndex)}>edit</button>
    </div>
  );
}

export default Card;
