import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Headerv2 } from "./Headerv2";
import { SongCard } from "./SongCard";
import { setCurrentTrack } from "../state/player/playerSlice";
import { CTypography } from "./assets/utils";

export const MainBoard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songs.songs);
  const [searchQuery, setSearchQuery] = useState("");

  const updateCurrentTrack = (track) => {
    dispatch(setCurrentTrack(track));
  };

  const filteredRecentlyPlayed =
    data?.recently_played?.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const filteredRecommended =
    data?.recommended?.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <Box
      sx={{
        background: "linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%)",
        minHeight: "100dvh",
        flexGrow: 1,
      }}
    >
      <Grid2 container>
        <Grid2 size={12}>
          <Headerv2
            user={data?.user}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Grid2>
        <Grid2 size={12}>
          <CTypography>Yakında Çalanlar</CTypography>
          <Grid2
            container
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            p="32px"
          >
            {filteredRecommended?.length > 0
              ? filteredRecommended?.map((rec, index) => (
                  <SongCard
                    playlist={rec}
                    index={index}
                    key={index}
                    onClick={() => updateCurrentTrack(rec)}
                  />
                ))
              : (
                <Typography sx={{ color: "white" }}>
                  {" "}
                  Aradığınız şarkı bulunamadı :( {" "}
                </Typography>
              )}
          </Grid2>
          <CTypography>Tavsiye Edilenler</CTypography>
          <Typography
            sx={{ color: "white", opacity: "0.6", paddingLeft: "32px" }}
          >
            Sevdiğin her şeyden biraz dinle.
          </Typography>
          <Grid2
            container
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            p="32px"
            paddingBottom="128px"
          >
            {filteredRecentlyPlayed.length > 0 ? (
              filteredRecentlyPlayed.map((rec, index) => (
                <SongCard
                  playlist={rec}
                  index={index}
                  key={index}
                  onClick={() => updateCurrentTrack(rec)}
                />
              ))
            ) : (
              <Typography sx={{ color: "white" }}>
                {" "}
                Aradığınız şarkı bulunamadı :( {" "}
              </Typography>
            )}
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
