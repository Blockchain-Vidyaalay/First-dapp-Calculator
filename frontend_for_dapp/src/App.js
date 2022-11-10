import React, { useEffect,useState } from "react";
import './App.css';
import Calculator from "./components/calculator";
// import CalculatorContract from './contracts/Calculator.json';
import {connectWeb3, connectWeb3Metamask} from './functions'

function App() {

  const [contractInstance, setContract] = useState(null)
  const [accounts, setAccounts] = useState()

  useEffect(()=>{ 
    async function connect(){
      try {
        let {accounts, instance} = await connectWeb3();
        setAccounts(accounts);
        setContract(instance);
        // await connectWeb3Metamask()

      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.log(error);
      }
    }
    connect();
  },[])


  return (
    <div id="App" >
      <div className="container">
        { contractInstance == null ? 
        <>
          <h2 style={{textAlign: "center"}}> Trying to connect with web3Provider </h2>
        </> :
        <>
        <Calculator contractInstance={contractInstance} account={accounts[0]}/>
        </>}
      </div>
    </div>
);
}

export default App;
