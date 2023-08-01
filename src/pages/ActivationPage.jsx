import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ActivationCard from "UI/ActivationCard";

const ActivationPage = () => {
    return (
        <Box
            sx={{
                background: "theme.palette.background.default",
                position: "relative",
                display: "flex",
                height: "810px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ActivationCard />
        </Box>
    );
};

ActivationPage.propTypes = {
    navbar: PropTypes.any,
};

export default ActivationPage;
