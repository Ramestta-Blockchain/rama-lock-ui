"use client"
import Image from "next/image";
import { Box, Drawer, styled, useTheme, } from "@mui/material";
import Link from "next/link";
import logo from '../../icons/logo.svg'
import logol from '../../icons/logol.svg'
import { useContext, useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ConnectWallet from "./connectWallet";
import { useAccount, useChainId, useSwitchChain } from 'wagmi'
import { config } from "@/configs/providers";
import { ColorModeContext } from "@/context";




const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'70px'
}));

const StyledBoxOne = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
     
}));
 ;

const StyledLink = styled(Link)(({ theme }) => ({
    
    'img': {
        '@media(max-width : 600px)': {
            width: '170px',
            marginTop: '5px'
        }
    }
}));



export default function Header() {
    const [openMob, setOpenMob] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenMob(newOpen);
    };
    const { switchChainAsync } = useSwitchChain()
    const { chainId, address } = useAccount()

    const DrawerList = (
        <Box sx={{
            width: 300,
            minHeight: '100vh',
            backgroundColor: theme.palette.primary.main, p: 3,
            'a': {
                width: '100%',
                justifyContent: 'center',
                marginTop: '1rem'
            }
        }}
            role="presentation" onClick={toggleDrawer(false)}>
            <Link href={"#"}><KeyboardBackspaceIcon sx={{ color: theme.palette.primary.contrastText }} /></Link>

            <ConnectWallet />


        </Box>
    );
    return (
        <Box sx={{

            padding: '15px 0px',
            '@media(max-width : 600px)': {
                padding: '5px 0px',
            }

        }}>
            <StyledBox>
                 
                <Box>
                    <StyledLink href={"/"}><Image src={logo} alt="logo" /></StyledLink>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            '@media(max-width : 600px)': {
                                gap: '0.5rem',
                            }
                        }}>
                        <StyledBoxOne>
                            {/* {chains.map((chain) => (
                                <button key={chain.id} onClick={async() => await switchChainAsync({ chainId: chain.id })}>
                                    {chain.name}
                                </button>
                            ))} */}


                            <ConnectWallet />
                        </StyledBoxOne>


                    </Box>
                </Box>
            </StyledBox>
        </Box>

    );
}
