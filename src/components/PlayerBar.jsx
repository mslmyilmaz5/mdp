import { AppBar, Toolbar, Typography, Slider, IconButton } from '@mui/material';
import { PlayArrow, SkipPrevious, SkipNext } from '@mui/icons-material';
import { CreditCard } from '../assets/icons/Icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PlayerBar = ({ data }) => {

    return (
        <AppBar
            sx={{
                top: 'auto',
                bottom: 0,
                backgroundColor: '#282828',
                boxShadow: '0px -1px 0px 0px #000000',
            }}
        >
            <Toolbar sx={{ alignItems: 'center' }}>
                <div style={{
                    display: 'flex', alignItems: 'center', width: '400px'
                }}>
                    <img
                        src={data?.image}
                        alt="Album Cover"
                        style={{ width: '48px', height: '48px', padding: '24px' }}
                    />
                    <div>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '16.8px',
                            marginRight: '8px'
                        }}>
                            {data?.title}
                        </Typography>
                        <Typography sx={{
                            marginRight: '8px',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '16.8px',
                            opacity: 0.7
                        }}>
                            {data?.artist || data?.subtitle}
                        </Typography>
                    </div>
                    <IconButton sx={{ color: '#fff', }}>
                        <FavoriteBorderIcon sx={{ width: '16px', height: '16px' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#fff' }}>

                        <CreditCard />
                    </IconButton>
                </div>


                <div style={{ display: 'flex', flexDirection: 'column', width: '576px', paddingLeft: '100px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                        <IconButton sx={{ color: '#fff', paddingRight: '32px' }}>
                            <SkipPrevious />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#fff',
                                backgroundColor: 'transparent',
                                borderRadius: '50%',
                                border: '1px solid white',
                                width: '40px',
                                height: '40px',
                            }}
                        >
                            <PlayArrow />
                        </IconButton>
                        <IconButton sx={{ color: '#fff', paddingLeft: '32px' }}>
                            <SkipNext />
                        </IconButton>
                    </div>

            
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 4500,
                                lineHeight: '14.4px',
                                opacity: 0.7,
                                marginLeft: '8px',
                            }}
                        >
                            00:00
                        </Typography>
                        <Slider
                            defaultValue={0}
                            aria-label="Player Progress"
                            sx={{ flexGrow: 1, mx: 2, color: '#fff' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 4500,
                                lineHeight: '14.4px',
                                opacity: 0.7,
                                marginLeft: '8px',
                            }}
                        >
                            {data?.duration || '03:30'}
                        </Typography>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default PlayerBar;