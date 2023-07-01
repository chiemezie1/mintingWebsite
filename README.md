# Project Name

## EmezieNFT

Description
EmezieNFT is a decentralized application (DApp) built on the Polygon (Matic) blockchain using React and Hardhat. It allows users to mint and manage non-fungible tokens (NFTs) that comply with the ERC721 standard.

The smart contract EmezieNFT.sol is the core component of the project, which inherits from the OpenZeppelin ERC721, Ownable, and ERC721Enumerable contracts. It provides functionalities for minting NFTs, setting various parameters, managing ownership, and enabling public minting. The frontend application built with React interacts with the smart contract to provide a user-friendly interface for minting and managing NFTs.

## Features

+ Mint NFTs: Users can mint NFTs by calling the mint function, specifying the quantity and paying the required mint price in MATIC.
+ Set Mint Price: The owner of the contract can set the mint price by calling the setMintPrice function.
+ Set Max Per Wallet: The owner can set the maximum number of NFTs that can be minted per wallet by calling the setMaxPerWallet function.
+ Set Max Supply: The owner can set the maximum supply of NFTs by calling the setMaxSupply function.
+ Enable Public Minting: The owner can enable or disable public minting by calling the setIsPublicMintEnable function.
+ Set Base Token URL: The owner can set the base URL for the token's metadata by calling the setBaseTokenUrl function.
+ Set Withdraw Wallet: The owner can set the address where the contract's balance can be withdrawn by calling the setWithdrawWallet function.
+ Whitelist Users: The owner can whitelist or unwhitelist users by calling the whitelistUser or unWhitelistUser functions.
+ Token URI: The tokenURI function returns the metadata URI for a given token ID.
+ Transfer Ownership: The owner can transfer ownership of the contract to another address by calling the transferOwnership function.

## Prerequisites

Node.js and npm installed globally
React.js
Hardhat

## Installation

Clone the repository.

```
git clone https://github.com/chiemezie1/mintingWebsite.git
```

### To deploy the contract

Change to the project directory.

```
cd mintingWebsite
```

Install the required dependencies.

```
npm install
```

To set up the .env file for storing the private key and Alchemy API key, follow these steps:
Create a new file named .env in the root directory of your project.
Open the .env file in a text editor.

Add the following lines to the .env file:

```
PRIVATE_KEY=<your-private-key>
ALCHEMY_API_KEY=<your-alchemy-api-key>
```

Replace <your-private-key> with your actual private key and <your-alchemy-api-key> with your actual Alchemy API key.
Save the .env fil

Compile

```
npx hardhat compile
```

Deploy the smart contracts to the Polygon Testnet (Matic) network

```
npx hardhat run scripts/deployEmezieNFT.js --network mumbai
```

You can find the contract ABI and Address at

```
./client/contract/emezieNFT.json
```

### To start the project

```
cd client
```

Install the required dependencies.

```
npm install
```

Start the React application.
```
npm start
```

Access the application in your web browser at <http://localhost:3000>.

Configuration
The configuration for the smart contract can be modified in the EmezieNFT.sol file:

mintPrice: The price in MATIC required to mint each NFT.
maxPerWallet: The maximum number of NFTs that can be minted per wallet.
maxSupply: The maximum total supply of NFTs.
isPublicMintEnable: Flag to enable or disable public minting.
baseTokenUrl: The base URL for the token's metadata.
baseExtension: The file format extension for the token's metadata.
withdrawWallet: The address where the contract's balance can be withdrawn.
Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please create an issue or submit a pull request.

License
This project is licensed under the UNLICENSED license.
