import React from "react";

function UserCard({ item }) {
  const { name, email, id, company } = item;

  return (
    <div className="user-card__container">
      <div>
        <label> {id}. Name : </label>
        <span className="user-card__name">{name} </span>
      </div>
      <div>
        <label> Email : </label>
        <span className="user-card__email">{email}</span>
      </div>
      <div>
        <label> Company : </label>
        <span> {company.name}</span>
      </div>
    </div>
  );
}

export default UserCard;
