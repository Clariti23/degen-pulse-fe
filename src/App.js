import React from 'react';
import './App.css';
import ProjectTable from './Components/ProjectTable';
import FetchData from './Data/FetchData';



const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <ProjectTable />
        <FetchData />

      </header>
    </div>
  );
}

export default App;
