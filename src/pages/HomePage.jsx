import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Button,
} from "@mui/material";
import { Fade } from "react-reveal";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import СustomCardHomePage from "UI/СustomCardHomePage";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import TextFormatOutlinedIcon from "@mui/icons-material/TextFormatOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    minWidth: "150px",
    minHeight: "30px",
    borderRadius: "15px",
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    backgroundColor: "none",
    "&:hover": {
        borderColor: "#FFF",
        backgroundColor: "#CCCCCC",
        color: "#FFF",
    },
}));

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

const HomePage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="xl">
            <Fade>
                <Card
                    sx={{
                        maxWidth: "100%",
                        height: "400px",
                        borderRadius: "0px",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        bgcolor: "primary.dark",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            bgcolor: "primary.dark",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <CardContent
                            sx={{
                                padding: "0px",
                                boxShadow: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-block",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        right: "84%",
                                        bottom: "63%",
                                        display: "flex",
                                    }}
                                >
                                    <SettingsBackupRestoreRoundedIcon
                                        sx={{ fontSize: "45px", zIndex: "1" }}
                                    />
                                    <Box sx={{ pl: "10px", zIndex: "1" }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: "22px",
                                            }}
                                        >
                                            История России
                                        </Typography>
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: "13px",
                                                color: "#CCCCCC",
                                            }}
                                        >
                                            Обучающее приложение
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        position: "absolute",
                                        right: "39%",
                                        bottom: "51%",
                                        zIndex: "1",
                                        fontSize: "45px",
                                        fontWeight: "800",
                                    }}
                                >
                                    История России
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        width: "800px",
                                        position: "absolute",
                                        right: "22%",
                                        bottom: "43%",
                                        zIndex: "1",
                                        fontSize: "18px",
                                        textAlign: "center",
                                    }}
                                >
                                    История России - это увлекательный
                                    путешествие в прошлое, которое позволяет
                                    понять нашу страну сегодня. Она включает в
                                    себя множество событий, личностей и
                                    культурных особенностей, которые формировали
                                    Россию, как мы ее знаем сегодня.
                                </Typography>

                                <ColorButton
                                    variant="outlined"
                                    onClick={() => console.log("click")}
                                    sx={{
                                        position: "absolute",
                                        right: "46%",
                                        bottom: "37%",
                                        zIndex: "1",
                                    }}
                                >
                                    Подробнее
                                </ColorButton>

                                <CardMedia
                                    sx={{ opacity: "0.4" }}
                                    component="img"
                                    height="100%"
                                    image="https://drikus.club/uploads/posts/2021-12/1640397670_4-drikus-club-p-pereprava-tankov-cherez-ladozhskoe-ozero-t-5.jpg"
                                    alt="Paella dish"
                                />
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
                <Card
                    sx={{
                        maxWidth: "1500px",
                        height: "700px",
                        borderRadius: "0px",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",

                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            bgcolor: "#2f251c",
                        }}
                    >
                        <CardContent sx={{ height: "100%" }}>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: "50px",
                                    mb: "50px",
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: "35px",
                                        width: "900px",
                                    }}
                                >
                                    Наше приложение отличается уникальной
                                    возможностью погрузиться в изучение истории
                                    России с помощью:
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    width: "1300px",
                                }}
                            >
                                <СustomCardHomePage content={content10[0]}>
                                    <FastForwardRoundedIcon
                                        sx={{
                                            fontSize: "45px",
                                            color: "#fff ",
                                        }}
                                    />
                                </СustomCardHomePage>
                                <СustomCardHomePage content={content10[1]}>
                                    <GroupsRoundedIcon
                                        sx={{
                                            fontSize: "45px",
                                            color: "#fff ",
                                        }}
                                    />
                                </СustomCardHomePage>
                                <СustomCardHomePage content={content10[2]}>
                                    <WhatshotRoundedIcon
                                        sx={{
                                            fontSize: "45px",
                                            color: "#fff ",
                                        }}
                                    />
                                </СustomCardHomePage>
                                <СustomCardHomePage content={content10[3]}>
                                    <MapRoundedIcon
                                        sx={{
                                            fontSize: "45px",
                                            color: "#fff ",
                                        }}
                                    />
                                </СustomCardHomePage>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
                <Card
                    sx={{
                        maxWidth: "1500px",
                        height: "850px",
                        borderRadius: "0px",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",

                            bgcolor: "#1f1812 ",
                        }}
                    >
                        <CardContent sx={{ height: "100%" }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: "80px",
                                    mb: "40px",
                                }}
                            >
                                <Box sx={{}}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "90px",
                                            ml: "240px",
                                            mr: "120px",
                                        }}
                                    >
                                        720
                                    </Typography>
                                </Box>
                                <Box sx={{ width: "1000px" }}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            pt: "15px",
                                            textAlign: "justify",
                                            fontSize: "35px",
                                            mr: "230px",
                                        }}
                                    >
                                        Уникальных информационных карточек,
                                        которые содержат такие современные
                                        способы изучения информации, как:
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: "80px",
                                    mb: "40px",
                                }}
                            >
                                <Box sx={{ ml: "240px", mr: "107px" }}>
                                    <PlayCircleOutlinedIcon
                                        sx={{
                                            ml: "55px",
                                            fontSize: "45px",
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "20px",
                                        }}
                                    >
                                        Видеоматериалы
                                    </Typography>
                                </Box>
                                <Box sx={{ width: "1000px" }}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            pt: "10px",
                                            textAlign: "justify",
                                            fontSize: "20px",
                                            mr: "230px",
                                        }}
                                    >
                                        Помогают визуализировать материал и
                                        улучшают восприятие информации. Наши
                                        видео материалы доступны содержат
                                        интересные факты и рассказы о ключевых
                                        событиях в истории России.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: "80px",
                                    mb: "40px",
                                }}
                            >
                                <Box sx={{ ml: "240px", mr: "155px" }}>
                                    <TextFormatOutlinedIcon
                                        sx={{
                                            ml: "50px",
                                            fontSize: "50px",
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "20px",
                                            ml: "26px",
                                        }}
                                    >
                                        Коспекты
                                    </Typography>
                                </Box>
                                <Box sx={{ width: "1000px" }}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            pt: "10px",
                                            textAlign: "justify",
                                            fontSize: "20px",
                                            mr: "230px",
                                        }}
                                    >
                                        Представляют собой лаконичный и
                                        содержательный обзор темы. Наши
                                        конспекты могут быть использованы в
                                        качестве быстрого введения в тему, а
                                        также для повторения и закрепления
                                        материала.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: "80px",
                                    mb: "40px",
                                }}
                            >
                                <Box sx={{ ml: "240px", mr: "134px" }}>
                                    <QuizOutlinedIcon
                                        sx={{
                                            ml: "50px",
                                            fontSize: "45px",
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "20px",
                                            ml: "7px",
                                        }}
                                    >
                                        Тестирование
                                    </Typography>
                                </Box>
                                <Box sx={{ width: "1000px" }}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            pt: "5px",
                                            textAlign: "justify",
                                            fontSize: "20px",
                                            mr: "230px",
                                        }}
                                    >
                                        Помогают пользователю проверить свои
                                        знания и определить уровень своего
                                        понимания. Наши тесты содержат вопросы
                                        разной сложности и могут быть
                                        использованы для персонализации
                                        обучения.
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
                <Card
                    sx={{
                        maxWidth: "1500px",
                        height: "100px",
                        borderRadius: "0px",
                        borderBottomLeftRadius: "15px",
                        borderBottomRightRadius: "15px",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",

                            bgcolor: "#2f251c",
                        }}
                    >
                        <CardContent sx={{ height: "100%" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: "10px",
                                    mr: "170px",
                                }}
                            >
                                <SettingsBackupRestoreRoundedIcon
                                    sx={{ fontSize: "45px" }}
                                />
                                <Box sx={{ pl: "10px" }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontSize: "22px",
                                        }}
                                    >
                                        История России
                                    </Typography>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: "13px",
                                            color: "#CCCCCC",
                                        }}
                                    >
                                        Все права защищены
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
            </Fade>
        </Container>
    );
};

HomePage.propTypes = {};

export default HomePage;
