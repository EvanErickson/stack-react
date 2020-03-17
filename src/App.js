import React from 'react';
import Question from './components/Question';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
    <Question />
    </div>
    </div>
    </>
  );
}

export default App;
