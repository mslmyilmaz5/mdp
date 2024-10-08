import { Box, Toolbar, Typography, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import {
  PlayArrow,
  SkipPrevious,
  SkipNext,
  CreditCard,
} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CText, InfoBox, IconBox } from "./assets/utils";
import { useState, useEffect } from "react";

export const PlayerBarv2 = () => {
  const currentSong = useSelector((state) => state.player);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(false);
  }, [currentSong]);

  console.log(isLiked);
  return (
    <Toolbar
      sx={{
        display: "flex",
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#282828",
        boxShadow: "0px -1px 0px 0px #000000",
      }}
    >
      <Box sx={{ display: "flex", padding: "24px" }}>
        <img
          src={currentSong?.image}
          alt="Album Cover"
          style={{ width: "48px", height: "48px" }}
        />
        <InfoBox>
          <Typography
            sx={{
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {currentSong?.title}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "12px",
              fontWeight: 400,
              opacity: "0.7",
            }}
          >
            {currentSong?.artist || currentSong?.subtitle}
          </Typography>
        </InfoBox>
        <IconBox>
          <IconButton onClick={() => setLiked(!isLiked)}>
            {!isLiked ? (
              <FavoriteBorderIcon
                sx={{
                  color: "white",
                  width: "16px",
                  height: "16px",
                  opacity: "0.5",
                }}
              />
            ) : (
              <FavoriteIcon
                sx={{
                  color: "#66D36E",
                  width: "16px",
                  height: "16px",
                }}
              />
            )}
          </IconButton>
          <IconButton>
            <CreditCard
              sx={{
                color: "white",
                width: "16px",
                height: "16px",
                opacity: "0.5",
              }}
            />
          </IconButton>
        </IconBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: 0.6,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "12px",
          }}
        >
          <IconButton
            sx={{ color: "#fff", paddingRight: "32px", opacity: "0.6" }}
          >
            <SkipPrevious />
          </IconButton>
          <IconButton
            sx={{
              color: "#fff",
              opacity: "0.6",
              backgroundColor: "transparent",
              borderRadius: "50%",
              border: "1px solid white",
              width: "40px",
              height: "40px",
            }}
          >
            <PlayArrow />
          </IconButton>
          <IconButton
            sx={{ color: "#fff", opacity: "0.6", paddingLeft: "32px" }}
          >
            <SkipNext />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "576px",
          }}
        >
          <CText sx={{ paddingRight: "8px" }}>0:00</CText>
          <Box
            sx={{
              width: "100%",
              height: "6px",
              backgroundColor: "#FFFFFF",
              opacity: 0.2,
              borderRadius: "5px",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          />
          <CText sx={{ paddingLeft: "8px" }}>3:45</CText>
        </Box>
      </Box>
    </Toolbar>
  );
};
