# Deploy the smart contract on testnet

In this repo I have demonstrated how to deploy the smart contract on testnet.

## How to setup

1. Use truffle pet-shop box to setup a simple project structure. `truffle unbox pet-shop`
2. Delete the src folder and unnecessary files.
3. Create a smart contract file under contract folder.  Eg: `Calcultor.sol`
4. Inorder to compile the contract you have to create a migration file for the contract. Create a migration file inside migration folder. 
5. Inside migration folder you need to put this code:

        var Calculator = artifacts.require("./Calculator.sol");  //Put your file name

        module.exports = function(deployer) {
          deployer.deploy(Calculator);
        };

7. Run the truffle develop in the terminal: `truffle develop`
8. Compile the code: `compile`
9. Deploy the code locally: `migrate --reset`
10. Once you have successfully deployed the code on local then start deploying on testnet.
11. To deploy on testnet you need to have two things:
      
      1. An account on infura :  https://www.infura.io/
      2. Goerli test-ethers or sepholia test-ethers
      
         Goreli faucet:  https://goerlifaucet.com/
         
         Sepholia faucet:  https://faucet-sepolia.rockx.com/
         
12. Add network in truffle-config.js file as per requirment
      
         //for sepolia network
         sepolia: {
            provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraProjectId}`),
            network_id: 11155111,       // sepolia's network id
            chain_id: 11155111,         // sepolia's chain id
            gas: 5500000,        // Gas limit used for deploys.
            confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
            timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets)
          },  
          
         //for goreli network
          goreli: {
            provider: () => new HDWalletProvider(mnemonic, `https://goreli.infura.io/v3/${infuraProjectId}`),
            network_id: 5,       // goreli's network id
            chain_id: 5,         // goreli's chain id
            gas: 5500000,        // Gas limit used for deploys.
            confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
            timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets)
          },  
          
          
13. Stop the truffle running in terminal. 
14. Compile the code again using `truffle compile`
15. Deploy the code: `truffle migrate --reset --network sepolia`  pass the network flag. 

Video: https://youtu.be/L1L050u7j2M
