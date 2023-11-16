import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <><div>
      <h1 className='navbar'>Book Search</h1>
    </div>
    <div className="App">
      <Search/>
    </div>
    
    </>
  );
}

export default App;
