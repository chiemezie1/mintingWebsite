import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = accounts[0] ? true : false;

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {isConnected ? (
                <div>connected</div>
            ) : (
                <button onClick={connectAccount}>connect</button>
            )}
        </div>
    );
};

export default NavBar;
