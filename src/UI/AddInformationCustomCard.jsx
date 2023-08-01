import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    LinearProgress,
    Typography,
    styled,
    linearProgressClasses,
} from "@mui/material";

const AddInformationCustomCard = ({ name, date, text, images }) => {
    return (
        <Card
            sx={{
                maxWidth: "250px",
                height: "438px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height="245px"
                    image={
                        images
                            ? images
                            : "https://phonoteka.org/uploads/posts/2021-04/1618354878_29-phonoteka_org-p-fon-v-korichnevikh-tonakh-29.jpg"
                    }
                    alt="Paella dish"
                />
                <Box
                    sx={{
                        position: "absolute",
                        width: "84px",
                        height: "42px",
                        padding: "6px",
                        top: "20px",
                        borderRadius: "0px 10px 10px 0px",
                        left: "41px",
                        transform: "translateX(-50%)",

                        bgcolor: "secondary.main",
                        display: "flex",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: 17,
                            marginTop: "2px",
                            cursor: "default",
                        }}
                    >
                        {date}
                    </Typography>
                </Box>
            </Box>
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
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            fontSize: 19,
                            visibility: "visible",
                            WebkitLineClamp: "2",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                            textAlign: "center",
                        }}
                    >
                        {name}
                    </Typography>
                </Box>
                <Typography
                    color="text.secondary"
                    sx={{
                        margin: 0,
                        fontSize: 15,
                        visibility: "visible",
                        maxHeight: "100px",
                        WebkitLineClamp: "4",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    {text}
                    {/* В год 6415 (907). Пошел Олег на греков, оставив Игоря в
                    Киеве; взял же с собою множество варягов, и славян, и чуди,
                    и кривичей, и мерю, и полян, и северян, и древлян, и
                    радимичей, и хорватов, и дулебов, и тиверцев */}
                </Typography>
            </CardContent>
        </Card>
    );
};

AddInformationCustomCard.propTypes = {
    date: PropTypes.any,
    name: PropTypes.any,
    text: PropTypes.any,
    images: PropTypes.any,
};

export default AddInformationCustomCard;
