import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, TextField, InputAdornment } from '@mui/material';
import { SpotifyLogoBig, HomeFilled, SearchSmall, LibrarySmall, SearchRight } from '../assets/icons/Icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ data = [] }) => {
    
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().indexOf(searchInput.toLowerCase()) === 0
    );

    return (
        <Drawer
            variant="permanent"
            sx={{
                minWidth: 224,
                '& .MuiDrawer-paper': {
                    minWidth: 224,
                    backgroundColor: '#030303',
                    color: '#FFFFFF',
                    zIndex: '1',
                },
            }}
        >
            <List>
                <ListItem>
                    <Typography sx={{ display: 'flex', padding: '40px 0 0 24px' }}>
                        <SpotifyLogoBig />
                    </Typography>
                </ListItem>

        
                <ListItem
                    button
                    onClick={() => navigate('/')}
                    sx={{
                        display: 'flex',
                        width: '200px',
                        height: '40px',
                        paddingLeft: '19px',
                        marginTop: '40px',
                        borderLeft: '5px solid #66D36E',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#66D36E1A',
                        },
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px' }}>
                        <HomeFilled />
                    </ListItemIcon>
                    <ListItemText
                        primary="Giriş"
                        primaryTypographyProps={{
                            sx: {
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '16.8px',
                                paddingLeft: '23px',
                            },
                        }}
                    />
                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate('/goz-at')}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '200px',
                        height: '40px',
                        paddingLeft: '23px',
                        cursor: 'pointer',
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px' }}>
                        <SearchSmall />
                    </ListItemIcon>
                    <ListItemText
                        primary="Göz At"
                        primaryTypographyProps={{
                            sx: {
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '16.8px',
                                paddingLeft: '23px',
                                opacity: '0.5',
                            },
                        }}
                    />
                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate('/kitaplık')}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '200px',
                        height: '40px',
                        paddingLeft: '23px',
                        cursor: 'pointer',
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '16px' }}>
                        <LibrarySmall sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Kitaplık"
                        primaryTypographyProps={{
                            sx: {
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '16.8px',
                                paddingLeft: '23px',
                                opacity: '0.5',
                            },
                        }}
                    />
                </ListItem>
            </List>
            <List>
                <Typography
                    sx={{
                        paddingLeft: '24px',
                        paddingTop: '81px',
                        lineHeight: '14.4px',
                        letterSpacing: '0.15em',
                        opacity: '0.6',
                        fontWeight: 400,
                        fontSize: '12px',
                    }}
                >
                    ÇALMA LİSTELERİN
                </Typography>

                <ListItem sx={{ paddingLeft: '16px', paddingTop: '14px' }}>
                    <TextField
                        placeholder="Ara"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        sx={{

                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '18px',
                            width: '176px',
                            height: '34px',
                            display: 'flex',
                            justifyContent: 'center',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: 'none',
                                },
                                '& .MuiInputBase-input': {
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    lineHeight: '16.8px',
                                    opacity: 0.5,
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    opacity: 1,
                                },
                            },
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ opacity: 0.6, }}>
                                        <SearchSmall />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ opacity: 0.6, }}>
                                        <SearchRight />
                                    </InputAdornment>
                                ),
                                sx: {
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    lineHeight: '16.8px',
                                    textAlign: 'left',
                                    opacity: 0.5,

                                },
                            },
                        }}
                    />
                </ListItem>
                {filteredData.length > 0 &&
                    filteredData.map((single, index) => (
                        <ListItem button key={index}>
                            <ListItemText
                                primary={single.title}
                                primaryTypographyProps={{
                                    style: {
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        textAlign: 'left',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer'
                                    },
                                }}
                                sx={{
                                    paddingLeft: '10px',
                                    lineHeight: '17.71px',
                                    opacity: '0.6',
                                }}
                            />
                        </ListItem>
                    ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;