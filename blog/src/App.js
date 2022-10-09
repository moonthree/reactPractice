/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, b] = useState(['오늘 점심 추천', '오늘 저녁 추천', '내일 아침 추천']);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleIdx, setTitleIdx] = useState(0)

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
      {
        title.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={ () => { setModal(!modal); setTitleIdx(i); }}>{title[i]}</h4>
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
        modal == true ? <Modal titleIdx={titleIdx} title={title}></Modal> : null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.title[props.titleIdx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      
    </div>
  )
}

export default App;
