import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Screens from './Screens';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/*" element={<Screens />} />
       </Routes>
    </div>
  );
}

export default App;
