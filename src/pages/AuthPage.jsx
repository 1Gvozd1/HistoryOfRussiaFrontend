import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import LoginForm from "UI/LoginForm";
import RegisterForm from "UI/RegisterForm";

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <Fade>
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
                {showLogin ? (
                    <LoginForm setShowLogin={setShowLogin} />
                ) : (
                    <RegisterForm setShowLogin={setShowLogin} />
                )}
            </Box>
        </Fade>
    );
};

AuthPage.propTypes = {
    navbar: PropTypes.any,
};

export default AuthPage;
