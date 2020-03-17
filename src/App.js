import React from 'react';
import Question from './components/questions/Question';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
         <Question />
         <Question />
         <Question />
         <Question />
         <Question />
         <Question />
         <Question />
         <Question />
         <Question />
         <Question />
    </div>
    </div>
    </>
  );
}

export default App;
