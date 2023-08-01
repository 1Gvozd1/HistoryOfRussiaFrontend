import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import {
    Avatar,
    Badge,
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import CustomCard from "UI/CustomCard";
import { Context } from "app/Hooks/Context";
import СustomCardHomePage from "UI/СustomCardHomePage";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import { Fade } from "react-reveal";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import CircularProgress, {
    circularProgressClasses,
} from "@mui/material/CircularProgress";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";

const content10 = [
    {
        title: "Река времени",
        description:
            "Основной компонент истории России, которая вдохновляет и позволяет узнать, каким образом формировалось наше сегодняшнее общество.",
    },
    {
        title: "Личности",
        description:
            "Яркие представители исторического прошлого, которые сделали значительный вклад в развитие России и стали настоящими героями своего времени.",
    },
    {
        title: "События",
        description:
            "Значимые эпизоды и переломные моменты в истории России, которые изменили ход истории и повлияли на судьбы миллионов людей.",
    },
    {
        title: "Карта",
        description:
            "Важный инструмент для понимания исторических событий, позволяющий увидеть связь между различными событиями, личностями и местами на карте России.",
    },
];

const ProfilePage = () => {
    const { user, setUser } = React.useContext(Context);
    console.log(user);

    return (
        <Fade>
            <Box
                sx={{
                    background: "theme.palette.background.default",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Card
                        sx={{
                            maxWidth: "100%",
                            height: "810px",
                            borderRadius: "15px",
                            bgcolor: "#1f1812 ",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="240px"
                            image="https://cdn.culture.ru/images/dea2a9e3-ff8b-546a-9ccb-b0deaecbc9d2"
                            alt="Paella dish"
                        />
                        <CardContent
                            sx={{
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-200px",
                                    left: "50px",
                                    display: "flex",
                                }}
                            >
                                <Card
                                    sx={{
                                        mt: "95px",
                                        width: "300px",
                                        height: "610px",
                                        borderRadius: "15px",
                                        bgcolor: "#2f251c",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "300px",
                                                bgcolor:
                                                    user?.roles == "ADMIN"
                                                        ? "#f44336 "
                                                        : "#bbbbbb",
                                            }}
                                        >
                                            <Typography
                                                variant="h1"
                                                sx={{ color: "#2f251c " }}
                                            >
                                                {user?.username[0]}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <CardContent
                                        sx={{ width: "100%", height: "1000px" }}
                                    >
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: "34px",
                                                pb: "15px",
                                            }}
                                        >
                                            Данные аккаунта
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",

                                                justifyContent: "left",
                                                alignItems: "center",
                                                mb: "15px",
                                            }}
                                        >
                                            <AlternateEmailRoundedIcon
                                                sx={{ fontSize: "30px" }}
                                            />
                                            <Box sx={{ pl: "5px" }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    Почта
                                                </Typography>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    {user?.email}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",

                                                justifyContent: "left",
                                                alignItems: "center",
                                                mb: "15px",
                                            }}
                                        >
                                            <PersonOutlineRoundedIcon
                                                sx={{ fontSize: "30px" }}
                                            />
                                            <Box sx={{ pl: "5px" }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    Никнейм
                                                </Typography>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    {user?.username}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",

                                                justifyContent: "left",
                                                alignItems: "center",
                                                mb: "15px",
                                            }}
                                        >
                                            <MenuOpenRoundedIcon
                                                sx={{ fontSize: "30px" }}
                                            />
                                            <Box sx={{ pl: "5px" }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    Роль
                                                </Typography>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    {user?.roles[0]}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",

                                                justifyContent: "left",
                                                alignItems: "center",
                                                mb: "15px",
                                            }}
                                        >
                                            <FingerprintRoundedIcon
                                                sx={{ fontSize: "30px" }}
                                            />
                                            <Box sx={{ pl: "5px" }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    ID
                                                </Typography>
                                                <Typography
                                                    variant="h2"
                                                    sx={{ fontSize: "15px" }}
                                                >
                                                    {"00000" + user?.id}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: "396px",
                                        height: "240px",
                                    }}
                                ></Box>
                                <Card
                                    sx={{
                                        mt: "-121px",
                                        width: "70%",
                                        height: "611px",
                                        borderRadius: "15px",
                                        bgcolor: "#2f251c  ",
                                    }}
                                >
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: "33%",
                                                    bgcolor: "#1f1812",
                                                    height: "580px",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        mt: "50px",
                                                        mb: "20px",
                                                    }}
                                                >
                                                    <Avatar
                                                        sx={{
                                                            width: 100,
                                                            height: 100,
                                                            bgcolor: "#372d24",
                                                        }}
                                                    >
                                                        <FastForwardRoundedIcon
                                                            sx={{
                                                                fontSize:
                                                                    "55px",
                                                                color: "#fff ",
                                                            }}
                                                        />
                                                    </Avatar>
                                                </Box>
                                                <Box
                                                    sx={{ textAlign: "center" }}
                                                >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{
                                                            fontSize: "40px",
                                                        }}
                                                    >
                                                        Река времени
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="h2"
                                                    sx={{
                                                        textAlign: "center",
                                                        pt: "50px",
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    Ваш прогресс
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        ml: "64px",
                                                        mt: "27px",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <CircularProgress
                                                        variant="determinate"
                                                        sx={{
                                                            color: "#2f251c  ",
                                                        }}
                                                        size={200}
                                                        thickness={4}
                                                        value={100}
                                                    />
                                                    <CircularProgress
                                                        variant="determinate"
                                                        value={0.5}
                                                        sx={{
                                                            color: "#814f0a",

                                                            left: 0,
                                                            position:
                                                                "absolute",
                                                        }}
                                                        size={200}
                                                        thickness={4}
                                                    />
                                                    <Box
                                                        sx={{
                                                            top: 0,
                                                            left: "-48px",
                                                            bottom: 0,
                                                            right: 0,
                                                            position:
                                                                "absolute",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h1"
                                                            component="div"
                                                            color="text.secondary"
                                                            sx={{
                                                                fontSize:
                                                                    "50px",
                                                            }}
                                                        >
                                                            1%
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    width: "33%",
                                                    bgcolor: "#1f1812",
                                                    height: "580px",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        mt: "50px",
                                                        mb: "20px",
                                                    }}
                                                >
                                                    <Avatar
                                                        sx={{
                                                            width: 100,
                                                            height: 100,
                                                            bgcolor: "#372d24",
                                                        }}
                                                    >
                                                        <GroupsRoundedIcon
                                                            sx={{
                                                                fontSize:
                                                                    "55px",
                                                                color: "#fff ",
                                                            }}
                                                        />
                                                    </Avatar>
                                                </Box>
                                                <Box
                                                    sx={{ textAlign: "center" }}
                                                >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{
                                                            fontSize: "40px",
                                                        }}
                                                    >
                                                        Личности
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="h2"
                                                    sx={{
                                                        textAlign: "center",
                                                        pt: "50px",
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    Ваш прогресс
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        ml: "64px",
                                                        mt: "27px",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <CircularProgress
                                                        variant="determinate"
                                                        sx={{
                                                            color: "#2f251c  ",
                                                        }}
                                                        size={200}
                                                        thickness={4}
                                                        value={100}
                                                    />
                                                    <CircularProgress
                                                        variant="determinate"
                                                        value={0}
                                                        sx={{
                                                            color: "#814f0a",

                                                            left: 0,
                                                            position:
                                                                "absolute",
                                                        }}
                                                        size={200}
                                                        thickness={4}
                                                    />
                                                    <Box
                                                        sx={{
                                                            top: 0,
                                                            left: "-48px",
                                                            bottom: 0,
                                                            right: 0,
                                                            position:
                                                                "absolute",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h1"
                                                            component="div"
                                                            color="text.secondary"
                                                            sx={{
                                                                fontSize:
                                                                    "50px",
                                                            }}
                                                        >
                                                            0%
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Box
                                                sx={{
                                                    width: "33%",
                                                    bgcolor: "#1f1812",
                                                    height: "580px",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        mt: "50px",
                                                        mb: "20px",
                                                    }}
                                                >
                                                    <Avatar
                                                        sx={{
                                                            width: 100,
                                                            height: 100,
                                                            bgcolor: "#372d24",
                                                        }}
                                                    >
                                                        <WhatshotRoundedIcon
                                                            sx={{
                                                                fontSize:
                                                                    "55px",
                                                                color: "#fff ",
                                                            }}
                                                        />
                                                    </Avatar>
                                                </Box>
                                                <Box
                                                    sx={{ textAlign: "center" }}
                                                >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{
                                                            fontSize: "40px",
                                                        }}
                                                    >
                                                        События
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    variant="h2"
                                                    sx={{
                                                        textAlign: "center",
                                                        pt: "50px",
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    Ваш прогресс
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        ml: "64px",
                                                        mt: "27px",
                                                        position: "relative",
                                                    }}
                                                >
                                                    <CircularProgress
                                                        variant="determinate"
                                                        sx={{
                                                            color: "#2f251c  ",
                                                        }}
                                                        size={200}
                                                        thickness={4}
                                                        value={100}
                                                    />
                                                    <CircularProgress
                                                        variant="determinate"
                                                        value={0}
                                                        sx={{
                                                            color: "#814f0a",

                                                            left: 0,
                                                            position:
                                                                "absolute",
                                                        }}
                                                        size={200}
                                                        thickness={4}
                                                    />
                                                    <Box
                                                        sx={{
                                                            top: 0,
                                                            left: "-48px",
                                                            bottom: 0,
                                                            right: 0,
                                                            position:
                                                                "absolute",
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h1"
                                                            component="div"
                                                            color="text.secondary"
                                                            sx={{
                                                                fontSize:
                                                                    "50px",
                                                            }}
                                                        >
                                                            0%
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Fade>
    );
};

ProfilePage.propTypes = {
    navbar: PropTypes.any,
};

export default ProfilePage;
