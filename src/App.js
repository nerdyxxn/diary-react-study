/* eslint-disable */
import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "멋쟁이토마토",
//     content: "일기 리스트 내용 1",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "알감자",
//     content: "일기 리스트 내용 2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "윤성",
//     content: "일기 리스트 내용 3",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  // 1. 일기 데이터를 관리할 state 생성
  const [data, setData] = useState([]);
  // 2. onCreate 함수 생성 -> 데이터 추가 기능 구현
  // id는 useRef를 활용해 현재값 current + 1 형태로 구현
  const dataId = useRef(0);
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

  const onDelete = targetId => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter(it => it.id !== targetId);
    setData(newDiaryList);
  };

  // 3. onCreate() 함수를 DiaryList에 props으로 전달
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
