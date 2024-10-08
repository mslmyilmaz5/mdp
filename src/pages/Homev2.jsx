import { Sidebarv2 } from "../components/Sidebarv2";
import { MainBoard } from "../components/MainBoard";
import { PlayerBarv2 } from "../components/PlayerBarv2";
import { Box, Stack } from "@mui/material";

export const Homev2 = () => {
  return (
    <Box>
      <Stack direction="row" sx={{flexGorw:1}}>
        <Sidebarv2 />
        <MainBoard />
      </Stack>
      <PlayerBarv2 />
    </Box>
  );
};

export default Homev2;
