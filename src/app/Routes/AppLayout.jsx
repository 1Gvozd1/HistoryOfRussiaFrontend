import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

import NavBar from "app/components/Navbar/NavBar";
import { MainContainer } from "app/components/MainContainer";

export const AppLayout = () => {
    const [navbarContent, setNavbarContent] = useState(null);
    return (
        <Box sx={{ display: "flex" }}>
            <NavBar>{navbarContent}</NavBar>
            <MainContainer>
                <Outlet context={{ setNavbarContent }} />
            </MainContainer>
        </Box>
    );
};
