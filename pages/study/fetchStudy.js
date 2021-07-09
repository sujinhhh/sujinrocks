import React, { useEffect } from "react";

function FetchStudy() {
  const getJsonData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getJsonData();
  }, []);
  return (
    <div style={{ height: 500 }}>
      <h1>Fetch 입니다</h1>
    </div>
  );
}

export default FetchStudy;
