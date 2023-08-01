import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ChangePasswordForm from "UI/ChangePasswordForm";

const ChangePasswordPage = () => {
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
            <ChangePasswordForm />
        </Box>
    );
};

ChangePasswordPage.propTypes = {
    navbar: PropTypes.any,
};

export default ChangePasswordPage;
