import React from 'react'

const Web3 = require('web3')
const web3 = new Web3(
    new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/243510668224496a8899942590e996e6'));

function componentDidMount() {
  web3.eth.getBalance('0xbC07B76e4C63E7B91c6E0395312D88D20449b106', function(err, result) {
      if (err) {
          console.log("error ",err)
      } else {
          console.log(web3.utils.fromWei(result, "ether") + " ETH")
      }
  })
  
};

export default function FetchData() {
    componentDidMount();

    return (
        <div>
            
        </div>
    )
}
