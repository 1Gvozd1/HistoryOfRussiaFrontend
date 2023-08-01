import {
    Box,
    CardMedia,
    Grid,
    Step,
    StepButton,
    Stepper,
    Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CustomCard from "./CustomCard";
import PropTypes from "prop-types";
import CustomAddCard from "./CustomAddCard";
import { Context } from "app/Hooks/Context";
import { Switch, Route, Link, Routes } from "react-router-dom";
import PageWrapper from "app/components/PageWrapper";
import InformationBlockPage from "pages/InformationBlockPage";
import InformationBlockPageNavbar from "pages/InformationBlockPageNavbar";

const content10 = [
    {
        title: "Первое упоминание в летописи Пскова",
        image: "https://rushrono.ru/images/hrono/upominanie_pskova.png",
        date: "903 год",
        description:
            "Псков — древний русский город, расположенный на берегу р. Великая при слиянии ее с р. Пскова, во 2-й пол. XIII — нач. XVI вв. — столица Псковской республики.",
    },
    {
        title: "Поход русов на Каспий",
        image: "https://rushrono.ru/images/hrono/pohod_na_kaspiy909.png",
        date: "909 год",
        description:
            "После первого похода русов и варягов на море Джурджан (Каспийское) между 864—884 годами походы русов на плодородные и густонаселенные берега Каспия становятся регулярными.",
    },
    {
        title: "Поход Игоря Старого на печенегов",
        image: "https://rushrono.ru/images/hrono/pohod_na_pechenegov.png",
        date: "920 год",
        description:
            "В 920 году князь Игорь совершает поход на печенегов — воеваша на печенеги. Сведений получается совсем немного",
    },
    {
        title: "Поход русских судов",
        image: "https://rushrono.ru/images/hrono/pohod_apenniny.png",
        date: "935 год",
        description:
            "Взаимоотношения Византии и Киева не всегда носили враждебный характер. Между ними издавна существовали",
    },
    {
        title: "Поход князя Игоря на древлян",
        image: "https://rushrono.ru/images/hrono/pohod_na_drevlyan.png",
        date: "942 год",
        description:
            "В 942 году Игорь направился к древлянам за данью. К старой он добавил новую. После некоторых сражений древляне заплатили князю дань",
    },
    {
        title: "Война с древлянами",
        image: "https://rushrono.ru/images/hrono/voina_drevlyane.png",
        date: "946 год",
        description:
            "Гибель Игоря от рук древлян стала причиной жестокой мести княгини Ольги. Хитростью и силой оружия она привела их к покорности, полностью уничтожив их племенных вождей и старейшин.",
    },
    {
        title: "Первая война с Болгарией",
        image: "https://rushrono.ru/images/hrono/voina_s_bolgariey.png",
        date: "968 год",
        description:
            "В 967 г. греческий император Никифор Фока ожидал войны с болгарами. Причиной этой войны должно было послужить отказ императора платить болгарам дань.",
    },
    {
        title: "Вторая война с Болгарией",
        image: "https://rushrono.ru/images/hrono/voina_s_bolgariey_2.png",
        date: "969 год",
        description:
            "После изгнания печенегов из под Киева Святослав у него умерла мать, княгиня Ольга. Похоронив ее Святослав устремляется в город своей мечты — Переяславец.",
    },
    {
        title: "Поход русов в Дербенд",
        image: "https://rushrono.ru/images/hrono/pohod_v_derbend.png",
        date: "987 год",
        description:
            "На основании данных, содержащихся в арабской Истории Ширвана и Дербенда, дошедшей до нашего времени в изложении турецкого историка XVII века, А.Ю. Карпов",
    },
    {
        title: "Хорватский поход",
        image: "https://rushrono.ru/images/hrono/horvatskiy_pohod.png",
        date: "992 год",
        description:
            "Хорваты, на которых пошел походом князь Владимир, — восточнославянский племенной союз, обитавший в междуречье верхнего Днестра и Прута, не путать с современными хорватами",
    },
];

const AgeEventsCard = (props) => {
    const { user, setUser } = useContext(Context);
    const filling = content10;
    return (
        <Box
            sx={{
                marginBottom: "140px",
            }}
        >
            <Box
                sx={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    component={"span"}
                    variant="h1"
                    color="text.primary"
                    sx={{
                        marginBottom: "4px",
                        fontSize: 60,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    {props.age}
                </Typography>
            </Box>

            <Grid
                sx={{ pl: "107px" }}
                container
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                gap={5}
            >
                {user?.roles[0] === "ADMIN" ? <CustomAddCard /> : null}
                {[...new Array(filling.length)].map((el, index) => (
                    <Grid key={el}>
                        <Link
                            to={`/card?id=${index}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <CustomCard content={filling[index]} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

AgeEventsCard.propTypes = {
    age: PropTypes.string,
    info: PropTypes.any,
};

export default AgeEventsCard;
