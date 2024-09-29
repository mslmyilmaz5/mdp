import React from 'react';
import { SearchSmall, ChevronLeft, ChevronRight } from '../assets/icons/Icons';
import { Avatar, Paper, Box, Toolbar, Typography, TextField, InputAdornment, IconButton } from '@mui/material';

const Header = ({ data, searchQuery, setSearchQuery }) => {
    return (
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '32px' }}>
                <IconButton sx={{ width: '32px', height: '32px', backgroundColor: '#030303', borderRadius: '50%', marginRight: '8px' }}>
                    <ChevronLeft />
                </IconButton>
                <IconButton sx={{ width: '32px', height: '32px', backgroundColor: '#030303', borderRadius: '50%', marginRight: '33px' }}>
                    <ChevronRight />
                </IconButton>
                <TextField
                    placeholder="Ara"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '18px',
                        width: '265px',
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
                                textAlign: 'left',
                                opacity: 0.5,
                            },
                            '& .MuiInputBase-input::placeholder': {
                                opacity: 1,
                            },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ opacity: 0.6, color: 'white' }}>
                                <SearchSmall />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <Paper
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '27px',
                    padding: '0 7px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    height: '40px',
                    width: '203px',
                }}
            >
                <Avatar
                    alt="User Avatar"
                    src={data?.profile_picture || ''}
                    sx={{ width: 24, height: 24, marginRight: '8px' }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        color: 'white',
                        fontSize: '14px',
                        opacity: '0.6',
                        fontWeight: '500',
                        lineHeight: '16.8px',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        maxWidth: '150px',
                    }}
                >
                    {data?.name || ''}
                </Typography>
            </Paper>
        </Toolbar>
    );
};

export default Header;