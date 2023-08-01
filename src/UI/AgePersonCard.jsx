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
        title: "Олег «Вещий»",
        image: "http://ic.pics.livejournal.com/egor_23/73280836/4082487/4082487_original.jpg",
        date: "879 год",
        description:
            "Вещего Олега можно смело назвать великим сыном Русской земли, он был язычником, но при этом великим воином и жрецом. Он стал выше своей религиозности, дабы развить культуру и просвещение для будущего народов России, которое уже стало неизбежно, после того как народ обрёл славянскую письменность и русскую азбуку.",
    },
    {
        title: "Игорь Рюрикович",
        image: "https://www.troovez.com/wp-content/uploads/2020/09/1600465713_Prince-Igor-de-Kiev-Kiev-Guerre-et-diplomatie-au.jpg",
        date: "912 год",
        description:
            "Находясь у основания Древнерусского государства, Игорь Рюрикович был гораздо менее успешен, чем его предшественники: его отцу Рюрику удалось закрепиться в Новгороде, наставнику и регенту Олегу Вещему",
    },
    {
        title: "Ольга «Святая»",
        image: "https://psdsale.com/components/com_jshopping/files/img_products/7130-olga.jpg",
        date: "945 год",
        description:
            "Княгиня Ольга – первая из женщин-правительниц на Руси, принявшая власть в качестве регента при своем сыне Святославе после смерти мужа от рук восставших древлян.",
    },
    {
        title: "Святослав Игоревич",
        image: "https://r.mt.ru/r10/photo85AD/20906699101-0/jpeg/bp.jpeg",
        date: "962 год",
        description:
            "Князь Святослав Игоревич – один из самых успешных военачальников Древнерусского государства, за свою удаль и удачу в сражениях получивший прозвище “Храбрый”.",
    },
    {
        title: "Ярополк I Святославич",
        image: "https://www.istmira.com/uploads/posts/2023-01/jaropolk1.webp",
        date: "972 год",
        description:
            "Летописи не сохранили подробностей отношений Ярополка с отцом. В 968 году он находился вместе с бабкой княгиней Ольгой и двумя братьями в осаждённом Печенегами Киеве",
    },
    {
        title: "Владимир Святославич «Святой»",
        image: "https://reflex-vrn.ru/wp-content/uploads/neistovyj-krestitel-rusi-tajny-zhizni-vladimira-krasnoe-solnyshko.jpg",
        date: "980 год",
        description:
            "Великий князь Владимир I – сын князя Святослава Игоревича и Малуши, рабыни-наложницы княгини Ольги, при котором произошло Крещение Руси. ",
    },
];

const AgePersonCard = (props) => {
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

AgePersonCard.propTypes = {
    age: PropTypes.string,
    info: PropTypes.any,
};

export default AgePersonCard;
