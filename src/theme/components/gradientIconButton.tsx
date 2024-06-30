import { Box, styled, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    background: 'linear-gradient(0deg, #00ffff, #00ffff)',
    color:'#000 !important',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    padding: '14px 16px',
    borderRadius: '30px',
    transition: '0.5s',
    '&:hover': {
        background: 'linear-gradient(0deg, #00ffff,#00ffff)',
    },
}));

interface Props {
    Gradient__Text__button: any
}

const GradientIconButton = ({ Gradient__Text__button }: Props) => {

    return (
        <>
            <StyledLink href={"#"}>
                <Box m={0} component={'p'}>{Gradient__Text__button}</Box>
            </StyledLink>
        </>
    )
}

export default GradientIconButton;