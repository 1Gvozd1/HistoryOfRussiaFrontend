import PropTypes from "prop-types";
import React, { useState } from "react";

import { Box, LinearProgress, useTheme } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { Question } from "./Question";

import { useRef } from "react";
import QuestionExplanation from "./QuestionExplanation";
import { Context } from "app/Hooks/Context";
import Result from "./Result";
import { Fade } from "react-reveal";

export const Quiz = ({ questions = [] }) => {
    const { setFinal } = React.useContext(Context);
    const [finalResult, setFinalResult] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [step, setStep] = useState(0);
    const currQuestion = questions[step];
    const percentage = Math.round((step / questions.length) * 100);

    const onClickVariant = (index) => {
        setStep((prevState) => prevState + 1);
        if (step + 1 === questions.length) {
            setIsEnd(true);
        }
    };
    setFinal(isEnd);
    return (
        <Context.Provider value={{ setFinalResult }}>
            {isEnd ? (
                (finalResult / questions.length) * 100 >= 80 ? (
                    <Box sx={{}}>
                        <LinearProgress
                            variant="determinate"
                            value={percentage}
                            sx={{
                                height: 10,
                                borderRadius: 5,
                                [`& .${linearProgressClasses.bar}`]: {
                                    borderRadius: 5,
                                },
                            }}
                        />

                        <Fade>
                            <Result
                                result={true}
                                finalResult={
                                    (finalResult / questions.length) * 100
                                }
                            />
                        </Fade>
                    </Box>
                ) : (
                    <Box sx={{}}>
                        <LinearProgress
                            variant="determinate"
                            value={percentage}
                            sx={{
                                height: 10,
                                borderRadius: 5,
                                [`& .${linearProgressClasses.bar}`]: {
                                    borderRadius: 5,
                                },
                            }}
                        />
                        <Fade>
                            <Result
                                result={false}
                                finalResult={
                                    (finalResult / questions.length) * 100
                                }
                            />
                        </Fade>
                    </Box>
                )
            ) : (
                <Box sx={{}}>
                    <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            [`& .${linearProgressClasses.bar}`]: {
                                borderRadius: 5,
                            },
                        }}
                    />

                    <Question
                        title={currQuestion?.title}
                        variants={currQuestion?.variants}
                        explanation={currQuestion?.explanation}
                        rightanswer={currQuestion?.rightanswer}
                        onClickVariant={onClickVariant}
                    />
                </Box>
            )}
        </Context.Provider>
    );
};

Quiz.propTypes = {
    questions: PropTypes.array.isRequired,
};
