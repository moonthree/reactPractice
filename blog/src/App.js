import logo from './logo.svg';
import './App.css';

function App() {

  // post 변수가 서버에서 가져온 데이터라고 가정
  let post = '블로그 글 제목';

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4 style={ {color:'red', fontSize:'16px'} }>블로그</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
