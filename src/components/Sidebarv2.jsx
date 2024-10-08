import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
  InputAdornment,
} from "@mui/material";
import {
  SpotifyLogoBig,
  HomeFilled,
  SearchSmall,
  LibrarySmall,
  SearchRight,
  SpotifyLogo,
} from "../assets/icons/Icons";

import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CInput } from "./assets/utils";
import { CGBox, CBoxResponsive } from "./assets/utils";
import { useNavigate } from "react-router-dom";
const ListData = new Map();

ListData.set("Gözat", SearchSmall);
ListData.set("Kitaplık", LibrarySmall);

const CBox = styled(Box)(() => ({
  "@media (max-width: 715px)": { display: "none" },
}));

export const Sidebarv2 = () => {
  const navigate = useNavigate();
  const playlist = useSelector((state) => state.songs.songs?.playlists || []);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredData = playlist.filter(
    (item) => item.title.toLowerCase().indexOf(searchInput.toLowerCase()) === 0
  );

  return (
    <CGBox>
      <CBox
        sx={{
          paddingLeft: "24px",
          paddingTop: "40px",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <SpotifyLogoBig onClick={() => navigate("/")} />
      </CBox>
      <CBox sx={{ paddingTop: "40px" }}>
        <List>
          <ListItem disablePadding sx={{ borderLeft: "5px solid #66D36E" }}>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon disablePadding>
                <HomeFilled width="16px" height="16px" />
              </ListItemIcon>
              <ListItemText
                primary="Giriş"
                sx={{ opacity: "1", color: "white" }}
              />
            </ListItemButton>
          </ListItem>

          {[...ListData].map(([label, Icon], index) => (
            <ListItem key={index} disablePadding sx={{ paddingLeft: "5px" }}>
              <ListItemButton>
                <ListItemIcon sx={{ opacity: "0.5" }}>
                  <Icon width="16px" height="16px" />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={{ opacity: "0.5", color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CBox>

      <CBoxResponsive>
        <Box sx={{ paddingBottom: "40px", paddingTop: "40px" }}>
          <SpotifyLogo
            cursor="pointer"
            onClick={() => navigate("/")}
            width="40px"
            height="40px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <HomeFilled
            cursor="pointer"
            onClick={() => null}
            width="20x"
            height="20px"
            paddingBottom="10px"
          />
          <SearchSmall
            cursor="pointer"
            onClick={() => null}
            width="20x"
            height="20px"
            paddingBottom="10px"
          />
          <LibrarySmall
            cursor="pointer"
            onClick={() => null}
            width="20x"
            height="20px"
          />
        </Box>
      </CBoxResponsive>

      <CBox sx={{ paddingLeft: "24px", paddingTop: "80px" }}>
        <Typography
          sx={{
            color: "white",
            letterSpacing: "0.15em",
            fontSize: "14px",
            fontWeight: 400,
            opacity: "0.6",
          }}
        >
          ÇALMA LİSTELERİN
        </Typography>
        <Box sx={{ paddingTop: "14px", paddingRight: "16px" }}>
          <CInput
            id="search-bar"
            placeholder="Ara"
            sx={{ width: "176px" }}
            value={searchInput}
            onChange={handleSearchInputChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchSmall width="16px" height="16px" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchRight />
                  </InputAdornment>
                ),
              },
            }}
          />
          {filteredData.length > 0 &&
            filteredData.map((single, index) => (
              <ListItem
                disablePadding
                button
                key={index}
                sx={{ opacity: "0.6", paddingTop: "10px" }}
              >
                <ListItemText
                  primary={single.title}
                  primaryTypographyProps={{
                    style: {
                      color: "white",
                      fontSize: "14px",
                      fontWeight: 500,
                      textAlign: "left",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    },
                  }}
                />
              </ListItem>
            ))}
        </Box>
      </CBox>
    </CGBox>
  );
};
