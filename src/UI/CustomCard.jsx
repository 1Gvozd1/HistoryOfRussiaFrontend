import React from "react";
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
import PropTypes from "prop-types";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#66FF66" : "#66FF66",
    },
}));

const CustomCard = ({ content }) => {
    return (
        <Card
            sx={{
                maxWidth: "250px",
                height: "438px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
                ":hover": {
                    cursor: "pointer",

                    boxShadow: "rgb(129,79,10) 0px 0px 0px 3px",
                },
            }}
        >
            <CardActionArea
                sx={{
                    height: "100%",
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <BorderLinearProgress
                        variant="determinate"
                        value={0}
                        sx={{ height: "8px" }}
                    />
                    <CardMedia
                        component="img"
                        height="245px"
                        image={content?.image}
                        alt="Paella dish"
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            width: "84px",
                            padding: "6px",
                            top: "20px",
                            borderRadius: "0px 10px 10px 0px",
                            left: "41px",
                            transform: "translateX(-50%)",
                            cursor: "pointer",
                            bgcolor: "secondary.main",
                            display: "flex",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: 17,
                                marginTop: "2px",
                                cursor: "pointer",
                            }}
                        >
                            {content?.date}
                        </Typography>
                    </Box>
                </Box>
                <CardContent>
                    <Box>
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
                                    cursor: "pointer",
                                    textAlign: "center",
                                    textDecoration: "none",
                                }}
                            >
                                {content?.title}
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
                                cursor: "pointer",
                            }}
                        >
                            {content?.description}
                        </Typography>
                    </Box>

                    {/* <Box
                        sx={{
                            marginTop: "26px",
                            cursor: "default",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                cursor: "default",
                                width: "97px",
                                display: "flex",
                                justifyContent: "space-between",
                                paddingTop: "2px",
                            }}
                        >
                            <Badge
                                badgeContent={700}
                                color="secondary"
                                max={999}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        fontSize: "0.55rem",
                                        padding: 0,
                                    },
                                }}
                            >
                                <RemoveRedEyeRoundedIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />
                            </Badge>
                            <Badge
                                badgeContent={145}
                                color="secondary"
                                max={999}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        fontSize: "0.55rem",
                                        padding: 0,
                                    },
                                }}
                            >
                                <LocalOfferRoundedIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />
                            </Badge>
                            <Badge
                                badgeContent={4.3}
                                color="secondary"
                                sx={{
                                    "& .MuiBadge-badge": {
                                        fontSize: "0.55rem",
                                        padding: 0,
                                    },
                                }}
                            >
                                <GradeRoundedIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />
                            </Badge>
                        </Box>
                    </Box> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

CustomCard.propTypes = {
    content: PropTypes.any,
    title: PropTypes.any,
    date: PropTypes.any,
    image: PropTypes.any,
    description: PropTypes.any,
};

export default CustomCard;
