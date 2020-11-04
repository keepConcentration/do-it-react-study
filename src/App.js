import React from 'react';
import './sass/materialize.scss';
import './App.css';

import CounterSFC from './practice/CounterSFC';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <CounterSFC id="id2" />
      </div>
    );
  }
}

export default App;
