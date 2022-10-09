/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, b] = useState(['오늘 점심 추천', '오늘 저녁 추천', '내일 아침 추천']);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ () => {
        let copy = [...title];
        copy[0] = '점심 뭐먹징;'
        b(copy)}}>
        리스트 0번 변경 버튼
      </button>
      <button onClick={ () => {
        let copy = [...title];
        copy.sort()
        b(copy)}}>
        리스트 정렬 버튼
      </button>
      {/* <div className="list">
        <h4>{ title[0] } <span onClick={ () => { likeChange(like+1) } }>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ () => { setModal(modal == true ? false : true) }}>
          { title[1] } 
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        title.map(function(title, i){
          return (
            <div className='list'>
              <h4 onClick={ () => { setModal(!modal) }}>{title}</h4>
              <p>2월 17일 발행</p>
              <p><span onClick={ () => { 
                let copy = [...like];
                copy[i] = copy[i] + 1;
                likeChange(copy) 
                }}>👍</span> {like[i]}</p>
            </div>
          )
        })
      }

      {
        // 삼항연산자로 if문 실행
        // 조건식 ? 참일때 실행할 코드 : 거짓일 떄 실행할 코드
        modal == true ? <Modal></Modal> : null
      }
      
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
