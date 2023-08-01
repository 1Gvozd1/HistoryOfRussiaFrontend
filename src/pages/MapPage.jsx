import {
    Box,
    Step,
    StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    styled,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Map from "UI/MapRussia";
import Fade from "react-reveal/Fade";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 30,
    },

    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    fontSize: 16,
    color: "#fff",
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
        "linear-gradient( 136deg, rgb(129,79,10) 0%,  rgb(129,79,10) 50%, rgb(47,37,28) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
}));

function ColorlibStepIcon(props) {
    const { className } = props;

    const icons = {
        1: "X",
        2: "XI",
        3: "XII",
        4: "XIII",
        5: "XIV",
        6: "XV",
        7: "XVI",
        8: "XVII",
        9: "XVIII",
        10: "XIX",
        11: "XX",
        12: "XXI",
    };

    return (
        <ColorlibStepIconRoot className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
};

const steps = [
    "Киевская Русь",
    "Княжеская власть",
    "Монгольское нашествие",
    "Татаро-монгольское иго",
    "Великое княжество Литовское",
    "Централизованное государство",
    "Опричнина, Реформы",
    "Смутное время",
    "Петровская эпоха",
    "Крестьянская реформа",
    "Октябрьская революция",
    "Настоящее и будущее",
];

const MapPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [user, setUser] = useState(null);
    const [key, setKey] = useState(0);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
        setKey(key + 1);
    };

    return (
        <Box
            sx={{
                background: "theme.palette.background.default",
                position: "relative",
            }}
        >
            <Stepper
                alternativeLabel
                activeStep={11}
                connector={<ColorlibConnector />}
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton onClick={handleStep(index)}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                {activeStep == index ? (
                                    <Box sx={{ color: "white" }}>{label}</Box>
                                ) : (
                                    <Box sx={{ color: "#808080 " }}>
                                        {label}
                                    </Box>
                                )}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Fade key={key}>
                {(() => {
                    switch (activeStep) {
                        case 0:
                            return <Map />;
                        case 1:
                            return <Map />;
                        case 2:
                            return <Map />;
                        case 3:
                            return <Map />;
                        case 4:
                            return <Map />;
                        case 5:
                            return <Map />;
                        case 6:
                            return <Map />;
                        case 7:
                            return <Map />;
                        case 8:
                            return <Map />;
                        case 9:
                            return <Map />;
                        case 10:
                            return <Map />;
                        case 11:
                            return <Map />;
                        default:
                            return <Map />;
                    }
                })()}
            </Fade>
        </Box>
    );
};

MapPage.propTypes = {
    navbar: PropTypes.any,
};

export default MapPage;
