import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./userCard";

function AxiosStudy() {
  const [userList, setUserList] = useState([]);

  const getJsonData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUserList(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <div>
      <h1>Axios 입니다</h1>
      <div className="user-card">
        {userList.map((item, index) => (
          <UserCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AxiosStudy;
