import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";

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
        <Flex justify="space-between" align="center" padding="8px" backgroundColor="black" opacity={0.5}>
            <Flex justify="flex-start" align="center">
                <div>Facebook</div>
                <div>Twitter</div>
                <div>Email</div>
            </Flex>

            <Flex justify="space-between" align="center" padding="30px">
                <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
                <Link to="/AboutUS" style={{ margin: '0 15px' }}>About</Link>
                <Link to="/Terms" style={{ margin: '0 15px' }}>Terms</Link>

                {isConnected ? (
                    <Box>connected</Box>
                ) : (
                    <Button
                        backgroundColor="orange"
                        borderRadius="8px"
                        dropShadow="0px 2px 2px 1px #0F0F0F"
                        color="red"
                        cursor="pointer"
                        paddingX="16px"
                        paddingY="8px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >
                        connect
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};

export default NavBar;
