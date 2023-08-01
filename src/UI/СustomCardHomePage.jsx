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
    Avatar,
} from "@mui/material";
import PropTypes from "prop-types";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";

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

const СustomCardHomePage = ({ content, children }) => {
    return (
        <Card
            sx={{
                maxWidth: "250px",
                height: "400px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
                ":hover": {
                    boxShadow: "rgb(129,79,10) 0px 0px 0px 3px",
                },
            }}
        >
            <Box
                sx={{
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "0px",
                        mt: "30px",
                    }}
                >
                    <Avatar sx={{ width: 75, height: 75, bgcolor: "#372d24" }}>
                        {children}
                    </Avatar>
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
                                    fontSize: 20,
                                    visibility: "visible",
                                    WebkitLineClamp: "2",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    cursor: "default",
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
                                fontSize: 17,
                                visibility: "visible",
                                maxHeight: "100px",
                                textAlign: "center",
                                fontStyle: "italic",

                                cursor: "default",
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
            </Box>
        </Card>
    );
};

СustomCardHomePage.propTypes = {
    content: PropTypes.any,
    title: PropTypes.any,
    date: PropTypes.any,
    image: PropTypes.any,
    description: PropTypes.any,
    children: PropTypes.any,
};

export default СustomCardHomePage;
