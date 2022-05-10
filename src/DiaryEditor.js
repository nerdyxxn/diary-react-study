/* eslint-disable */
import { useState } from "react";

const DiaryEditor = () => {
  // 작성자 input 관리하기 위한 state 생성
  const [author, setAuthor] = useState("");
  // 본문 내용 textarea 관리하기 위한 state 생성
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={author}
          onChange={e => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
