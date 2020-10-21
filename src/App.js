import React from 'react';
import './App.css';
import ProjectTable from './Components/ProjectTable';

var Web3 = require('web3')
function componentWillMount() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/243510668224496a8899942590e996e6')
  );

  web3.eth.getBlock('latest').then(console.log)
  
}


const App = () => {
  componentWillMount();
  return (
    <div className="App">
      <header className="App-header">
        
        <ProjectTable>
        </ProjectTable>

      </header>
    </div>
  );
}

export default App;
