import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "멋쟁이토마토",
    content: "일기 리스트 내용 1",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "알감자",
    content: "일기 리스트 내용 2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "윤성",
    content: "일기 리스트 내용 3",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
