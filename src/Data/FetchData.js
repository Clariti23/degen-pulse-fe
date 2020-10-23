import React from 'react'

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/243510668224496a8899942590e996e6'));
const API = "http://localhost:3001/projects"; 

//Make a call to Infura to get some information from the blockchain
function componentDidMount() {
  web3.eth.getBalance('0xbC07B76e4C63E7B91c6E0395312D88D20449b106', function(err, result) {
      if (err) {
          console.log("error ",err)
      } else {
          console.log(web3.utils.fromWei(result, "ether") + " ETH")
      }
  })

  let snapshot = {
      name: "Synthetix",
      chain: "ETH",
      category: "Derivatives",
      value: 150000.99
  }
  setInterval(fetch(API, {
    method: "POST",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(snapshot)
})
  .then(response => console.log("posting to db...", response)) , 1000 * 60)
};

// get the Total Value Locked in Synthetix Contract
// Post the value to the Web Server once per hour




export default function FetchData() {
    componentDidMount();

    return (
        <div>
            
        </div>
    )
}
