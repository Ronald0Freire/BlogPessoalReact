import React from "react";
import './Home.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import { green, pink } from '@mui/material/colors';
import { Box } from '@mui/material';
import { fontSize, height } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Home() {

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundImage: `url(https://casa.abril.com.br/wp-content/uploads/2021/06/10-moveis-sustentaveis-casa.com-4.jpg?quality=95&strip=info&w=1024)` }}>

                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ color: 'white', fontWeight: 'bold' }}
                        >GreenShop!</Typography>


                        <Box className='border' style={{ backgroundColor: '#424242' }}>

                            <Typography variant="h5" gutterBottom color='textPrimary' component='h5' align="center" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                                Decore seu espaço com atitude ecologicamente correta!
                            </Typography>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}></Box>

                        <Button variant="outlined" style={{ borderColor: 'write', backgroundColor: '#3F51B5', color: 'white' }} > Ver Produtos</Button>


                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src='' alt='' width='500px' height='500px' />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: 'white' }}></Grid>

            </Grid>


            <Grid className="espaço" container direction='row' justifyContent='center' alignItems='center' >

                <Stack spacing={5} direction='row'>
                    <Avatar src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=740">

                    </Avatar>
                    <Avatar sx={{ bgcolor: green[500] }} >

                    </Avatar>
                    <Avatar sx={{ bgcolor: green[500] }}>
                        <AssignmentIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: green[500] }}>
                        <AssignmentIcon />
                    </Avatar>
                </Stack>

            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box className="font">
                    <Typography variant="h4" gutterBottom>
                        Produtos sustentáveis para o seu lar
                    </Typography>
                </Box>

            </Grid>

            <Grid className="espaço" container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={3} >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </Grid>
            </Grid>






        </>




    );

}
export default Home