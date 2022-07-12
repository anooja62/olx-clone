import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SignUp from './Pages/Signup'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home />}/>
        
        <Route path='/signup' element={<SignUp />}/>
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
