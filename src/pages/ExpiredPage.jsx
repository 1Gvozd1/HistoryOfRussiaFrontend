import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ExpiredForm from "UI/ExpiredForm";

const ExpiredPage = () => {
    return (
        <Box
            sx={{
                background: "theme.palette.background.default",
                position: "relative",
                display: "flex",
                height: "94vh",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ExpiredForm />
        </Box>
    );
};

ExpiredPage.propTypes = {
    navbar: PropTypes.any,
};

export default ExpiredPage;
