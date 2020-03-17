import React from 'react';
import Question from './components/questions/Question';
import Navbar from './components/Navbar';

function App() {
let arr = new Array();
arr.length = 10;
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
          {arr.map(elem => { <Question elm={elem}/>})}
    </div>
    </div>
    </>
  );
}

export default App;
