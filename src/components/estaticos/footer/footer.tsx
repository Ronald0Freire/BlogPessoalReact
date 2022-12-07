import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './footer.css';
import mapa from '../../../assets/mapa.png';
import atendimento from '../../../assets/atendimento.png';
import facebook from '../../../assets/facebook.png';
import tiktok from '../../../assets/tiktok.png';
import instagram from '../../../assets/instagram.png';

function Footer() {
    return (
        <>
            <Grid container xs={12} sm={12} className='footer-background' >

                <Grid item sm={5} className='n1'>
                    <Box paddingTop={7} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Entre em contato</Typography>
                    </Box>
                    <Box paddingTop={4} display="flex" alignItems="center" justifyContent="center">
                        <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
                            <img src={atendimento} alt="Logo" height={45} ></img>
                        </a>
                    </Box>

                </Grid>

                <Grid item sm={2} >
                    <Box paddingTop={6} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Nossas redes sociais </Typography>
                    </Box>
                    <Box paddingTop={4} display="flex" alignItems="center" justifyContent="space-evenly">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src={facebook} height={47} alt="mapa" />
                        </a>
                        <a href="https://tiktok.com/" target="_blank" rel="noreferrer">
                            <img src={tiktok} height={45} alt="mapa"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src={instagram} height={45} alt="mapa" />
                        </a>
                    </Box>
                </Grid>

                <Grid item sm={5} >

                    <Box paddingTop={6} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Localização
                        </Typography>
                    </Box>

                    <Box paddingTop={4} display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                            <img src={mapa} height={45} alt="mapa" />
                        </a>

                    </Box>
                    
                </Grid>
                <Grid item sm={12}>
                <Box className="textoFooter textoGreenShop"  >
                    GreenShop &reg; {new Date().getFullYear()}
            </Box>
            </Grid>

            </Grid>
            


        </>
    )
}

export default Footer;