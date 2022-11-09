import styled from 'styled-components';
import { FaEye } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { like, selectSort, scrollEvent } from '../../store';
import { useState } from 'react';

// start of styledComponent
let BoardsHeaderDiv = styled.div`
  select{
    float: right;
  }
`
let TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  .board:nth-child(odd) {
    border-right: 1px solid #EEEEEE;;
  }
  height: auto;
  min-height: 100%;
  padding-bottom: (footer높이);
`
let Boards = styled.div`
  padding: 20px;
  border-top: 1px solid #EEEEEE;
  .bot > span{
    margin-right: 10px;
    color: gray
  }
  .region{
    font-size: 14px;
  }
  .icon{
    font-size: 14px;
    position: relative;
    top: 1px;
    cursor:pointer;
  }
  .date{
    float: right;
    font-size: 14px;
  }
`
let Img = styled.img`
  height: 100px;
  width: 100px;
  float: right;
`
let ObserveDiv = styled.div`
  height: 10px;
  position : relative;
  transform : translateY(-100%);
`
// end of styledComponent


const Board = () => {
  let dispatch = useDispatch()
  // Redux store 가져와 줌
  // const post = useSelector((state)=>{ return state })
  const postScroll = useSelector((state)=>{ return state })
  // console.log(newPost)
  const selectList = ['new', 'popular'];
  let [Selected, setSelected] = useState("");
  const onSelectSort = (e) => {
    setSelected(e.target.value)
    dispatch(selectSort(e.target.value))
  }
  // useEffect(() => {
  //   // console.log("렌더링 될때마다 실행");
  //   let obDiv = document.querySelector('#observer')
  //   let observer = new IntersectionObserver((e) => {
  //     // console.log('a')
  //     dispatch(scrollEvent())
  //   })
  //   observer.observe(obDiv)
  // });
  

  return (
    <div>
      <BoardsHeaderDiv>
        <select onChange={onSelectSort} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <h4 onClick={() => {dispatch(scrollEvent())}}>자유게시판</h4>
      </BoardsHeaderDiv>
      <TitleDiv>
        {
          postScroll.postScroll.map(function(el, i) {
            return (
              <Boards key={i} className='board'>
                {el.imageUrl !== null ? <Img src={el.imageUrl} alt="" /> : null}
                <h3>{el.title}</h3>
                <p>{el.content}</p>
                
                <div className='bot'>
                  <span><FaEye className="icon"/> {el.viewCount}</span>
                  <span onClick={()=>{
                    dispatch(like(i))
                  }}>
                    <FaThumbsUp className="icon"/>
                    {el.likeCount}
                  </span>
                  <span><FaRegComment className="icon"/> 미정</span>
                  <span className='date'>{el.createAt}</span>
                </div>
              </Boards>
            )
          })
        }
      </TitleDiv>
      <ObserveDiv>
        <div id='observer'>
          옵저빙
        </div>
      </ObserveDiv>
    </div>
  );
};

export default Board;