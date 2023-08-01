import React, { useContext } from "react";
import {
    Alert,
    AlertTitle,
    Box,
    Card,
    styled,
    Button,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    minWidth: "370px",
    minHeight: "50px",
    borderRadius: "15px",
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const QuestionExplanation = ({ explanation, result }) => {
    return (
        <Card
            sx={{
                maxWidth: "400px",
                height: "320px",
                borderRadius: "15px",
                bgcolor: "primary.main",
                boxShadow: result
                    ? "rgb(153 204 153) 0px 0px 0px 3px"
                    : "rgb(255 204 204) 0px 0px 0px 3px",
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        marginBottom: "6px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Alert
                        severity="success"
                        icon={false}
                        sx={{
                            width: "400px",

                            backgroundColor: "primary.main",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="text.primary"
                            sx={{
                                color: result ? "#CCFFCC" : "#FF9999",
                                fontSize: "25px",
                            }}
                        >
                            {result ? "Асболютно точно!" : "Неправильно!"}
                        </Typography>
                    </Alert>
                </Box>
                <Typography
                    color="text.primary"
                    sx={{
                        mt: "10px",
                        height: "150px",
                        fontSize: 16,
                        textAlign: "justify",
                        visibility: "visible",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    {explanation}
                </Typography>
                <Box
                    sx={{
                        mt: "20px",
                    }}
                >
                    <ColorButton variant="outlined">
                        Следующий вопрос
                    </ColorButton>
                </Box>
            </CardContent>
        </Card>
    );
};

QuestionExplanation.propTypes = {
    explanation: PropTypes.any,
    result: PropTypes.any,
};

export default QuestionExplanation;
