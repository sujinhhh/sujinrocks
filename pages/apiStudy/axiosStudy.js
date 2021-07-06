import axios from "axios";
import { useEffect } from "react";

function AxiosStudy() {
  const getJsonData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <div>
      <h1>Axios 입니다</h1>
    </div>
  );
}

export default AxiosStudy;
