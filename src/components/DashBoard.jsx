import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PlayerListCard from './PlayerListCard';
import Header from './Header';
import { useState } from 'react';
import PlayerBar from './PlayerBar';

const Dashboard = ({ data }) => {

    const initialData = {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        image: 'https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ',
        duration: '5:55',
    };

    const [currentPlay, setCurrentPlay] = useState(initialData);
    const [searchQuery, setSearchQuery] = useState('');
    

    const filteredRecentlyPlayed = data?.recently_played?.filter((item) =>
        item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0 ||
        item.subtitle.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0
    ) || [];

    const filteredRecommended = data?.recommended?.filter((item) =>
        item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === 0

    ) || [];

    return (
        <div
            style={{
                flex: 1,
                background: 'linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%)',
                paddingBottom: '120px',
                minHeight: '100vh',
            }}
        >
            <Header data={data?.user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Typography
                style={{
                    margin: '25px 0px',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: '700',
                    lineHeight: '33.6px',
                    textAlign: 'left',
                    paddingLeft: '32px',
                }}
            >
                Yakında Çalanlar
            </Typography>

            <Grid container spacing={2} justifyContent="flex-start" sx={{ padding: '0 32px' }}>
                {filteredRecentlyPlayed.length > 0 ? (
                    filteredRecentlyPlayed.map((recent, index) => (
                        <PlayerListCard
                            playlist={recent}
                            index={index}
                            key={index}
                            onClick={() => setCurrentPlay(recent)}
                        />
                    ))
                ) : null}
            </Grid>
            <Typography
                style={{
                    paddingBottom: '9px',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: '700',
                    lineHeight: '33.6px',
                    textAlign: 'left',
                    paddingLeft: '32px',
                    paddingTop: '32px',
                }}
            >
                Tavsiye Edilenler
            </Typography>
            <Typography
                style={{
                    paddingLeft: '32px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '16.8px',
                    textAlign: 'left',
                    opacity: '0.6',
                    paddingBottom: '48px',
                }}
            >
                Sevdiğin her şeyden biraz dinle.
            </Typography>

            <Grid container spacing={2} justifyContent="flex-start" sx={{ padding: '0 32px' }}>
                {filteredRecommended.length > 0 ? (
                    filteredRecommended.map((rec, index) => (
                        <PlayerListCard
                            playlist={rec}
                            index={index}
                            key={index}
                            onClick={() => setCurrentPlay(rec)}
                        />
                    ))
                ) : null}
            </Grid>
            <PlayerBar data={currentPlay} />
        </div>
    );
};

export default Dashboard;