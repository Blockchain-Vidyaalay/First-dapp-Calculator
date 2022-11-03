var Web3 = require('web3');
const providers = new Web3.providers.HttpProvider('http://localhost:8545')
var web3 = new Web3(providers);

const Calculator= require('../build/contracts/Calculator.json');

// function to test the truffle connection

// async function connection () {
//     accounts= await web3.eth.getAccounts();
//     console.log("accounts:", accounts)
// }

async function createInstance(){
    const accounts= await web3.eth.getAccounts();
    const networkId=  await web3.eth.net.getId();
    // console.log(networkId);
    const {address}= Calculator.networks[networkId];
    // console.log(address);

    instance= await new web3.eth.Contract(
        Calculator.abi,
        address
    )

    return {instance, accounts};
}

module.exports = {createInstance};
