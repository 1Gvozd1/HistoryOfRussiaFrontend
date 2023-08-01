import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#2f251c",
            dark: "#1f1812",
        },
        secondary: {
            main: "#814f0a",
        },
        background: {
            paper: "#2f251c",
            default: "#372d24",
        },
        text: {
            primary: "#FFF",
            secondary: "#d1d1dc",
        },
        action: {
            active: "#d1d1dc",
            hover: "#814f0a",
            selected: "#814f0a",
        },
    },
});
