/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import DefaultCardImage from "../assets/DefaultCover.png";

export const SongCard = ({ playlist, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: "10px",
        height: "273px",
        width: "203px",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <Box
        style={{
          padding: "16px 16px 0px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))",
            opacity: 1,
          }}
        />
      </Box>
      <CardContent>
        <Typography
          style={{
            fontSize: "14px",
            color: "#FFFFFF",
            paddingBottom: "6px",
          }}
        >
          {playlist.subtitle ? playlist.subtitle : playlist.title}
        </Typography>
        <Typography
          style={{
            color: "#FFFFFF",
            fontSize: "12px",
            opacity: "0.6",
          }}
        >
          {playlist.description}
        </Typography>
      </CardContent>

      {isHovered && (
        <Box
          onClick={onClick}
          sx={{
            cursor: "pointer",
            position: "absolute",
            bottom: "16px",
            right: "16px",
            height: "48px",
            width: "48px",
            borderRadius: "50%",
            background: "#66D36E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 0px 20px 0px #000000CC",
            transition: "opacity 300ms ease-out",
          }}
        >
          <PlayArrowIcon sx={{ color: "#FFFFFF" }} />
        </Box>
      )}
    </Card>
  );
};
