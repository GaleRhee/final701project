import React from 'react';
import './App.css';
import mainImg from './image/03.png';

function App(props) {
  return (
    <div className='App'>
      <img alt='' src={mainImg} />
      <h2><b>스프링 부트 + 리액트 CI/CD 성공 기원!!!<br />한번에 성공하기</b></h2>
    </div>
  );
}

export default App;