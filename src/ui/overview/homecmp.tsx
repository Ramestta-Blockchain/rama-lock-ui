"use client"
import { Box, Typography, styled } from "@mui/material";
import MainTab from "./mainTab";
import Header from "../shared/Header";













const Homecmp = () => {
    return (

        <>
            <Box
                sx={{
                    backgroundColor: '#080808',
                    padding: '0rem 2rem',
                    '@media(max-width : 600px)': {
                        padding: '0rem 0.5rem',
                    }
                }}
            >


                <Header />
                <MainTab />






            </Box>
        </>

    );
}


export default Homecmp