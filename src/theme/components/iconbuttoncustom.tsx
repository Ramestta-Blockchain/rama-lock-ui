 
import { ColorModeContext } from "@/context";
import { Box, styled, useTheme, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: "#101012",
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#fff',
    border:'1px solid #1D1D20',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '8px',
}));


interface Props {
    Image__icon: any;
    Text__button: any;
    onClick: any;
}


const Iconbuttoncustom = ({ Image__icon, Text__button,onClick }: Props) => {

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    return (
        <>
            <StyledLink href={"#"} onClick={onClick}>
                <Image src={Image__icon} alt="icon__button" width={30}/>
                <Box m={0} component={'p'}>{Text__button}</Box>
            </StyledLink>
        </>
    )
}

export default Iconbuttoncustom;