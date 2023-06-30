import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";

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
        <Flex justify="space-between" align="center" padding="20px" backgroundColor="black"
            opacity={0.5}>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            <Flex justify="space-between" align="center" padding="30px">
                <Box margin="0 15px">About</Box>
                <Box margin="0 15px">Mint</Box>
                <Box margin="0 15px">Team</Box>
                {isConnected ? (
                    <div>connected</div>
                ) : (
                    <button onClick={connectAccount}>connect</button>
                )}
            </Flex>
        </Flex>
    );
};

export default NavBar;
