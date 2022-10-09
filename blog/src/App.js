/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // post 변수가 서버에서 가져온 데이터라고 가정
  let post = '블로그 글 제목';
  let [title, b] = useState(['오늘 점심 추천', '오늘 저녁 추천', '내일 아침 추천']);
  let [like, likeChange] = useState(0);

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <button onClick={ () => {
          title[0] = '점심 뭐먹징';
          b(title)}}>
            버튼
        </button>
        <h4>{ title[0] } <span onClick={ () => { likeChange(like+1) } }>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
