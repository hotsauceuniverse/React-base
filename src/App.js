import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state
  // 1. 변수 대신 쓰는 데이터 저장공간
  // 2. useState()를 이용해 만들어야 함
  // 3. 문자, 숫자, array, object 다 저장가능

  // state에 데이터 저장해놓는 이유!
  // 1. 웹이 App처럼 동작하게 만들 수 있다.
  // 2. HTML이 자동으로 재렌더링이 된다. (그냥 변수는 변경되어도 자동 재렌더링이 안됨)

  let [글제목, 글제목_변경] = useState(['남자 코트 추천', '여자 코트 추천', '계절별 코트 추천']);
  // [state데이터, state 데이터 변경 함수]


  // onClick ={클릭될 때 실행할 함수} / onClick={() => {실행할 내용}

  let [좋아요, 좋아요변경] = useState(0);

  function 제목변경() {
    let newArray = [...글제목]; // deep copy해서 수정해야 된다. 그냥 복사하면 값 공유이다.
    newArray[0] = '남자 패딩 추천'
    글제목_변경(newArray);
  } // deep copy : 값 공유 X , 서로 독립적인 값을 가지는 복사

  // Array, Object 데이터 수정 방법
  // 1. 일단 변경함수 써야함.
  // 2. 변경함수(대체할 데이터) 
  // 3. state는 직접 건들지 말고, deep copy해서 그것을 건드리면 된다.

  return (
    <div className="App">
      <div  className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <sapn onClick={() => {좋아요변경(좋아요 + 1)}}>👍</sapn> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <button onClick={제목변경}>종류 변경</button>
        <hr/>
      </div>
      <div className="list"> 
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list"> 
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal />
      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
  </div>
  )
  // HTML을 한단어로 줄여서 쓸 수 있는 방벙: 리액트의 Component문법
  // Component 유의사항
  // 1. 이름은 대문자
  // 2. return() 안에 있는건 태그 하나로 묶여야 함
}


export default App;
