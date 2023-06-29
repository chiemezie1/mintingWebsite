import React from "react";
import { useState } from "react";
import {ethers, BigNumber} from "ethers";
import EmezieNFT from "../contract/emezieNFT.json"



const MainMint = ({accounts, setAcounts}) => {
    const [mintAmount, setMintAmount] = useState("");
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(EmezieNFT.address, EmezieNFT.abi, signer);

            try{

            }
            catch (error){
                console.log("error:", error)
            }
        }

    }

    return(
        <div>

        </div>
    )
};
export default MainMint;