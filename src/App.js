import React from 'react';
import Question from './components/questions/Question';
import Navbar from './components/Navbar';
import Rightside from './components/Rightside'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar />
    <div className="container mt-3">
      <div className="row">
       <div className="col-md-2">
       </div>
        <div className="col-md-7">
          <div className="container">
            <h3>Questions</h3>
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
          </div>
    <div className="col-md-2">
      <Rightside />
    </div>
    </div>
    </div>
      <Footer />
    </>
  );
}

export default App;
