/* eslint-disable */
import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  // DiaryDispatchContext는 onCreate, onRemove, onEdit로 이루어진
  // memoized된 객체로 전달되기 때문에 아래처럼 {} 비구조화 할당으로 받아와야 함
  const { onCreate } = useContext(DiaryDispatchContext);

  // DOM 객체에 접근하기 위한 useRef 레퍼런스 객체 생성
  const authorInput = useRef();
  const contentInput = useRef();

  // 작성자 input & 본문내용 textarea 관리하기 위한 state 생성
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // focus
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // focus
      contentInput.current.focus();
      return;
    }
    // App.js에서 보낸 onCreate를 호출해서 데이터 추가
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
