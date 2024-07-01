'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { makeStyles } from '@mui/styles';
import Heading from '@/theme/components/heading';
import Form from './form';
import Card from './card';
import TableList from './tableList';
import Calcolate from './calcolate';
import { useAccount, useBlockNumber, useChainId, useReadContracts } from 'wagmi';
import { ramaLockAbi } from '@/configs/abi/ramalock';
import { ramaLockContractAddresses } from '@/configs';
import { Address } from 'viem';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Terms from './tarms';




interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles({
    mainDiv: {
        margin: '10px',
        minHeight: '100vh',
        '@media(max-width : 600px)': {
            margin: '0px 0px 20px 0px'
        }
    },
    box_hding: {

        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '12px'
    },
    comingsoon: {
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #02b5b5',
        borderRadius: '12px',
        marginTop: '1rem'
    },
    MainHis: {
        margin: '1.5rem 1.5rem 1.5rem 1.5rem'
    }
});

export default function MainTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const chainId = useChainId()
    const { address } = useAccount()
    const queryClient = useQueryClient()
    const { data: blockNumber } = useBlockNumber({ watch: true })

    const contractBase = {
        abi: ramaLockAbi,
        address: chainId === 1370 ? ramaLockContractAddresses.ramestta.rama_lock : ramaLockContractAddresses.pingaksha.rama_lock,
    }

    const resultOfUserLocked = useReadContracts({
        contracts: [
            {
                ...contractBase,
                functionName: 'owner',
                args: []
            },
            {
                ...contractBase,
                functionName: 'user2Locked',
                args: [address as Address]
            },
            {
                ...contractBase,
                functionName: 'ramaPriceInUSD',
                args: [],
            },
        ]
    })

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // use to refetch
    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: resultOfUserLocked.queryKey })
    }, [blockNumber, queryClient, resultOfUserLocked])

    return (
        <Box className={classes.mainDiv}>



            <Box sx={{ width: '100%', border: '1px solid #1D1D20', borderRadius: '8px', marginTop: '1.5rem' }}>

                <Box sx={{ textTransform: 'capitalize', }}>
                    <Tabs
                        variant="fullWidth" // Ensure the tabs take up the full width
                        scrollButtons="auto" // Enable scroll buttons automatically
                        sx={{
                            backgroundColor: '#101012',
                            borderRadius: '8px',
                            padding: '4px 6px 6px 6px',
                            '.MuiTabs-indicator': {
                                height: 46,
                                color: '#000 !important',
                                background: 'linear-gradient(0deg, #02b5b5, #02b5b5)',
                                borderRadius: '8px',
                                backgroundColor: 'transparent',
                            },
                            '.Mui-selected': {
                                color: "#000 !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", flex: 1, '@media(max-width : 600px)': { padding: '12px 10px', flex:'none'} }} label="Dashboard" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", flex: 1, '@media(max-width : 600px)': { padding: '12px 10px',flex:'none' } }} label="Terms & Conditions" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", flex: 1, '@media(max-width : 600px)': { padding: '12px 10px',flex:'none' } }} label="Calculator" {...a11yProps(2)} />

                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box mt={3}>
                        {
                            (resultOfUserLocked?.data && resultOfUserLocked.data[0].result === address) && <Form resultOfUserLocked={resultOfUserLocked} />

                        }
                         
                        <Card resultOfUserLocked={resultOfUserLocked} />
                        <Box sx={{
                            padding: '1rem',
                            '@media(max-width : 600px)': {
                                padding: '8px'
                            }
                        }}>
                            <TableList resultOfUserLocked={resultOfUserLocked} />
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box mt={3}>

                        <Terms />
                    </Box>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                    <Box mt={3}>

                        <Calcolate />
                    </Box>
                </CustomTabPanel>

            </Box>
        </Box>
    );
}
