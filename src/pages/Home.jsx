import React from 'react'
import Sidebar from '../components/Sidebar'
import PlayerBar from '../components/PlayerBar';
import Dashboard from '../components/DashBoard'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/web-team/case/spotify.json');
                setData(response.data);
            } catch (error) {
                console.error('Error: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar data={data?.playlists} />
            <Dashboard data={data} />
            
        </div>
    )
}

export default Home
