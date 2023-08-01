import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    styled,
    Typography,
    Button,
} from "@mui/material";
import QuestionExplanation from "./QuestionExplanation";
import { Context } from "app/Hooks/Context";
import { Fade } from "react-reveal";

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    width: "300px",
    height: "50px",
    borderRadius: "15px",

    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const Question = ({
    title,
    variants = [],
    explanation,
    rightanswer,
    onClickVariant,
}) => {
    const { setFinalResult } = useContext(Context);

    const [colorAnswer, setColorAnswer] = useState(["", ""]);

    const [oneClick, setOneClick] = useState(0);

    const [res, setRes] = useState(null);

    const [isShowExplanation, isSetShowExplanation] = useState(false);

    const onClickQuestion = (index) => {
        if (oneClick === 0) {
            if (index === rightanswer) {
                setFinalResult((prevState) => prevState + 1);
                isSetShowExplanation(true);
                setRes(true);
                setColorAnswer([
                    `${index}`,
                    "rgb(204 255 204) 0px 0px 0px 3px",
                ]);
            } else {
                isSetShowExplanation(true);
                setRes(false);
                setColorAnswer([
                    `${index}`,
                    "rgb(255 204 204) 0px 0px 0px 3px",
                ]);
            }
        }
        setOneClick(1);
    };

    return (
        <Box
            sx={{
                marginTop: "20px",
            }}
        >
            <Typography variant="h5" component="h5" sx={{ mb: "10px" }}>
                {title}
            </Typography>
            <Box sx={{ display: "flex" }}>
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    {variants.map((q, index) => (
                        <ColorButton
                            key={q}
                            onClick={() => onClickQuestion(index)}
                            sx={{
                                marginBottom: "36px",
                                boxShadow:
                                    colorAnswer[0] == index
                                        ? colorAnswer[1]
                                        : "",
                            }}
                        >
                            <ListItemText primary={q} />
                        </ColorButton>
                    ))}
                </List>
                <Box
                    onClick={() => {
                        onClickVariant(1);
                        setColorAnswer(["", ""]);
                        setOneClick(0);
                        isSetShowExplanation(false);
                    }}
                    sx={{ ml: "30px", mb: "30px", mt: "10px" }}
                >
                    {isShowExplanation ? (
                        <Fade>
                            <QuestionExplanation
                                explanation={explanation}
                                result={res}
                            />
                        </Fade>
                    ) : null}
                </Box>
            </Box>
        </Box>
    );
};

Question.propTypes = {
    title: PropTypes.string.isRequired,
    explanation: PropTypes.any,
    result: PropTypes.any,
    variants: PropTypes.array.isRequired,
    rightanswer: PropTypes.any,
    onClickVariant: PropTypes.func,
};
