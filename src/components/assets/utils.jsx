import styled from "@emotion/styled";
import { TextField, Box, IconButton, Typography } from "@mui/material";

export const CInput = styled(TextField)({
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "white",
    borderRadius: "18px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    "& .MuiInputBase-input": {
      color: "white",
      opacity: 0.5,
    },
    "& fieldset": {
      border: "none",
    },
  });

  export const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "200px",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "27px",
    alignItems: "center",
    padding: "8px",
    [theme.breakpoints.down("sm")]: { display: "none" },
  }));

  export const CIconButton = styled(IconButton)({
    width: "32px",
    height: "32px",
    backgroundColor: "#030303",
    borderRadius: "50%",
    marginRight: "8px",
  });

  export const CTypography = styled(Typography)({
    paddingTop: "32px",
    paddingLeft: "32px",
    color: "white",
    fontWeight: "700",
    fontSize: "28px",
  });

  export const CText = styled(Typography)({
    color: "white",
    opacity: 0.7,
    fontSize: "12px",
  });

  export const InfoBox = styled(Box)(({ theme }) => ({
    display: "flex",
    paddingLeft: "12px",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: { display: "none" },
  }));

  export const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingLeft: "12px",
    [theme.breakpoints.down("md")]: { display: "none" },
  }));

  export const CGBox = styled(Box)(() => ({
    minHeight: "100dvh",
    background: "#030303",
  

  }));

  export const CBoxResponsive = styled(Box)(() => ({
    display: "none",
    paddingTop: "40px",
    "@media (max-width: 715px)": {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
    },
  }));