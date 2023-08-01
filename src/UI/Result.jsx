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
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

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

const Result = ({ result, finalResult }) => {
    return (
        <Card
            sx={{
                maxWidth: "500px",
                mb: "20px",
                mt: "20px",
                height: "340px",
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
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Alert
                        severity="success"
                        icon={false}
                        sx={{
                            width: "600px",
                            backgroundColor: "primary.main",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            color="text.primary"
                            sx={{
                                color: result ? "#CCFFCC" : "#FF9999",
                            }}
                        >
                            {result ? "Поздравляем!" : "Неудача!"}
                        </Typography>
                    </Alert>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        color="text.primary"
                        sx={{
                            mt: "20px",
                            fontSize: 40,
                            visibility: "visible",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        {`Вы набрали ${finalResult}%`}
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        color="text.primary"
                        sx={{
                            fontSize: 15,
                            visibility: "visible",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        {`Это больше, чем 100% учеников`}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: "60px",
                        fontSize: "30px",
                    }}
                >
                    <CheckCircleRoundedIcon
                        sx={{ color: "#CCFFCC", fontSize: "30px", mr: "7px" }}
                    />
                    <CheckCircleRoundedIcon
                        sx={{ color: "#CCFFCC", fontSize: "30px", mr: "7px" }}
                    />
                    <CheckCircleRoundedIcon
                        sx={{ color: "#CCFFCC", fontSize: "30px", mr: "7px" }}
                    />
                    <CheckCircleRoundedIcon
                        sx={{ color: "#CCFFCC", fontSize: "30px", mr: "7px" }}
                    />
                    <CheckCircleRoundedIcon
                        sx={{ color: "#CCFFCC", fontSize: "30px", mr: "7px" }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

Result.propTypes = {
    result: PropTypes.any,
    finalResult: PropTypes.any,
};

export default Result;
