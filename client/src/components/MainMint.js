import './MainMint.css';
import React from "react";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import EmezieNFT from "../contract/emezieNFT.json"



const MainMint = ({ accounts, setAcounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(EmezieNFT.address, EmezieNFT.abi, signer);

            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log("response:", response)
            }
            catch (error) {
                console.log("error:", error)
            }
        }

    }
    const handleDecreemenrt = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }
    const handleIncreemenrt = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <div className="component-container">
            <div className="title">Emezie NFT</div>
            {isConnected ? (
                <div className='button-mint'>
                    <div className="button-container">
                        <button onClick={handleDecreemenrt}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncreemenrt}>+</button>
                    </div>
                    <button className="mint-button" onClick={handleMint}>
                        Mint Now
                    </button>
                </div>
            ) : (
                <div className="not-connected-container">
                    <div className="not-connected">Not connected</div>
                    <p className="connect-message">Please connect</p>
                </div>
            )}
            <div className="cover"></div>
            <div className="motivating-text">
                Unlock the power of creativity<br />
                Embrace meaningful NFTs<br />
                Join the revolution
            </div>
        </div>
    );
};
export default MainMint;