import React from 'react';
import styled from 'styled-components';

let TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 47% 47%;
`
let Boards = styled.div`
  height: 150px;
  padding: 20px;
  border-top: 1px solid #EEEEEE;
`
let HorizontalLine = styled.div`
  border-left: 1px solid #EEEEEE;
  height:100%;
  left: 50%;
  position: absolute;
`
let Img = styled.img`
  height: 50px;
  width: 50px;
`

const Board = () => {
  return (
    <div>
      <h4>자유게시판</h4>
      <TitleDiv>
        <HorizontalLine/>
        <Boards>
          <h3>제목</h3>
          <p>내용내용내용</p>
          <Img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
        </Boards>
        <Boards>
          <h3>제목</h3>
          <p>내용내용내용</p>
        </Boards>
        <Boards>
          <h3>제목</h3>
          <p>내용내용내용</p>
        </Boards>
      </TitleDiv>
    </div>
  );
};

export default Board;