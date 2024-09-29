
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import './css/App.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'system-ui'
    ].join(',')
  }
})

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
