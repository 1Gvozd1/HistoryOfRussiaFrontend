import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import RecoverPasswordForm from "UI/RecoverPasswordForm";

const RecoveryPasswordPage = () => {
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
            <RecoverPasswordForm />
        </Box>
    );
};

RecoveryPasswordPage.propTypes = {
    navbar: PropTypes.any,
};

export default RecoveryPasswordPage;
