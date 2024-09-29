import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DefaultCardImage from '../assets/DefaultCover.png';

const PlayerListCard = ({ playlist, index, onClick }) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div>
            <Grid key={index}>
                <Card onClick={onClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        cursor: 'pointer',
                        transition: 'all 300ms ease-out',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        borderRadius: '10px',
                        height: "273px",
                        width: "203px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        boxShadow: isHovered ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Box
                        style={{
                            padding: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="171px"
                            width="171px"
                            image={imageError ? DefaultCardImage : playlist.image}
                            alt={playlist.title}
                            onError={() => setImageError(true)} 
                            style={{
                                filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))',
                                opacity: 1,
                            }}
                        />
                    </Box>
                    <CardContent>
                        <Typography
                            component="div"
                            style={{
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '17.71px',
                                textAlign: 'left',
                                color: '#FFFFFF',
                                paddingBottom: '6px'
                            }}
                        >
                            {playlist.subtitle ? playlist.subtitle : playlist.title}
                        </Typography>
                        <Typography variant="body2" color="gray"
                            style={{
                                fontSize: '12px',
                                fontWeight: 500,
                                lineHeight: '14.4px',
                                textAlign: 'left',
                            }}
                        >
                            {playlist.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default PlayerListCard;