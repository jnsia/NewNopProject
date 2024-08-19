import { useEffect, useState } from "react";
import "./App.css";
import api from "./apis/randomuser";

// 사용자의 이름, 사진, 이메일 주소 및 전화 번호
interface userData {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  phone: string;
  cell: string;
}

function App() {
  const [userDatas, setUserDatas] = useState<userData[]>([]);
  const [orderBy, setOrderBy] = useState("ASC");
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    api.fetchMultipleData(
      5,
      (response: { data: { results: userData[] } }) => {
        const userDatas = response.data.results;
        setUserDatas(userDatas);
      },
      (error: unknown) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default App;
