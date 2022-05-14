/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// https://jsonplaceholder.typicode.com/comments

function App() {
  // 1. 일기 데이터를 관리할 state 생성
  const [data, setData] = useState([]);
  // 2. onCreate 함수 생성 -> 데이터 추가 기능 구현
  // id는 useRef를 활용해 현재값 current + 1 형태로 구현
  const dataId = useRef(0);

  // const getData = async () => {
  //   const res = await fetch(
  //     "https://jsonplaceholder.typicode.com/comments"
  //   ).then(res => res.json());
  //   console.log(res);
  // };
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        //결과값 : res.data
        const initData = res.data.slice(0, 20).map(it => {
          return {
            author: it.email,
            content: it.body,
            emotion: Math.floor(Math.random() * 5) + 1,
            created_date: new Date().getTime(),
            id: dataId.current++,
          };
        });
        setData(initData);
      })
      .catch(() => {
        console.log("데이터 호출 실패!");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = targetId => {
    const newDiaryList = data.filter(it => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map(list =>
        list.id === targetId ? { ...list, content: newContent } : list
      )
    );
  };

  // 3. onCreate() 함수를 DiaryList에 props으로 전달
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
