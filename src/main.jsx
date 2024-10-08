import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { store } from "./state/store/store.js";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSongsFetch } from "./state/songs/songsSlice.jsx";
import "./css/App.css";

// Homev2 import
import { Homev2 } from "./pages/Homev2.jsx";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "system-ui"].join(","),
  },
});

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homev2 />} />
      </Routes>
    </ThemeProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
