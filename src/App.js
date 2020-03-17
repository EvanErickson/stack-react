import React from 'react';
import Question from './components/questions/Question';
import Navbar from './components/Navbar';
import Rightside from './components/Rightside'


function App() {

  return (
    <>
    <Navbar />
    <div className="container mt-3">
      <div className="row">
        <h1>Questions</h1>
        <div className="col-md-10">
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
    <div className="col-md-1">
      <Rightside />
    </div>
    </div>
  
    </div>
    </>
  );
}

export default App;
