import React, { useEffect } from "react";

function FetchStudy() {
  const getJsonData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getJsonData();
  }, []);
  return (
    <div style={{ height: 500 }}>
      <h1></h1>
    </div>
  );
}

export default FetchStudy;
