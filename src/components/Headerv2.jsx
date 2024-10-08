/* eslint-disable react/prop-types */
import { SearchSmall, ChevronLeft, ChevronRight } from "../assets/icons/Icons";
import { CInput, CIconButton } from "./assets/utils";
import { Avatar, Box, InputAdornment, Typography } from "@mui/material";
import { UserBox } from "./assets/utils";

export const Headerv2 = ({ user, searchQuery, setSearchQuery }) => {
  return (
    <Box sx={{ display: "flex", padding: "32px" }}>
      <CIconButton>
        <ChevronLeft />
      </CIconButton>
      <CIconButton>
        <ChevronRight />
      </CIconButton>
      <Box sx={{ paddingLeft: "32px", paddingRight: "32px" }}>
        <CInput
          sx={{ maxWidth: "265px", minWidth: "100px" }}
          id="search-bar-top"
          placeholder="Ara"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchSmall width="16px" height="16px" />
                </InputAdornment>
              ),
            },
          }}
        ></CInput>
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}>
        <UserBox>
          <Avatar
            alt="User Avatar"
            src={user?.profile_picture || ""}
            sx={{ width: 24, height: 24, marginRight: "8px" }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: "white",
              opacity: "0.6",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {user?.name || ""}
          </Typography>
        </UserBox>
        <Avatar
          src={user?.profile_picture || ""}
          alt="User Avatar"
          sx={{ display: { xs: "flex", sm: "none" } }}
        />
      </Box>
    </Box>
  );
};
