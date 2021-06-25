import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Text } from 'grommet';
import '../css/Header.css';

function Header(props) {
    return (
        <div>
            <Box direction="row" align="center" gap="large">
                <Link className="Header-Link" to="/">
                    <img className="Logo" src="/logo.png" alt="logo" />
                </Link>
                <Link className="Header-Link" to="/about">
                    <Text className="Header-Link-Text" size="3xl"> About </Text>
                </Link>
                <Link className="Header-Link" to="/genetics">
                    <Text className="Header-Link-Text" size="3xl"> Genetics </Text>
                </Link>
            </Box>
            <hr className="Header-Divider"/>
        </div>
    )
}

export default Header;