import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    StepContent,
    Button,
    Paper,
    styled,
    Card,
    Container,
    CardContent,
    CardMedia,
    Tabs,
    Tab,
    Chip,
    Divider,
    Avatar,
    Rating,
    Grid,
    LinearProgress,
    linearProgressClasses,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    MobileStepper,
    useTheme,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { Fade } from "react-reveal";
import { Quiz } from "UI/Quiz";
import Comment from "UI/Comment";
import QuestionExplanation from "UI/QuestionExplanation";
import CommentAdd from "UI/CommentAdd";
import CustomCard from "UI/CustomCard";
import AddInformationCustomCard from "UI/AddInformationCustomCard";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Controller, useForm } from "react-hook-form";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    minWidth: "200px",
    minHeight: "50px",
    borderRadius: "15px",
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const CssTextField = styled(TextField)(({ theme }) => ({
    "& label.Mui-focused": {
        color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.text.secondary,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.text.primary,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.text.primary,
        },
    },
}));

const CreateInformationBlockPage = (props) => {
    const [questions, setQuestions] = useState([
        localStorage.getItem("moderator")
            ? {
                  id: 1,
                  question:
                      "Какое религиозное обрядование Владимир выбрал после отправки своих посольств на испытание веры?",
                  options: [
                      "Иудаизм",
                      "Ислам",
                      "Христианство византийского обряда",
                      "Христианство западного обряда",
                  ],
                  explanation: `Владимир отправил собственные посольства «в болгары», «в немцы», «в греки», чтобы «испытать их службу». После возвращения посольств он остановил свой выбор на христианстве византийского обряда, поразившего послов красотой богослужения. `,
                  answer: 3,
              }
            : {
                  id: 1,
                  question: "",
                  options: ["", "", "", ""],
                  explanation: ` `,
                  answer: "",
              },

        {
            id: 2,
            question: "",
            options: ["", "", "", ""],
            explanation: ` `,
            answer: "",
        },
        {
            id: 3,
            question: "",
            options: ["", "", "", ""],
            explanation: ` `,
            answer: "",
        },
        {
            id: 4,
            question: "",
            options: ["", "", "", ""],
            explanation: ` `,
            answer: "",
        },
        {
            id: 5,
            question: "",
            options: ["", "", "", ""],
            explanation: ` `,
            answer: "",
        },
    ]);
    const handleQuestionChange = (e, questionId) => {
        const updatedQuestions = [...questions];
        const questionIndex = updatedQuestions.findIndex(
            (q) => q.id === questionId
        );
        updatedQuestions[questionIndex].question = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleExplanationChange = (e, questionId) => {
        const updatedQuestions = [...questions];
        const questionIndex = updatedQuestions.findIndex(
            (q) => q.id === questionId
        );
        updatedQuestions[questionIndex].explanation = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (e, questionId, optionIndex) => {
        const updatedQuestions = [...questions];
        const questionIndex = updatedQuestions.findIndex(
            (q) => q.id === questionId
        );
        updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleAnswerChange = (e, questionId) => {
        const updatedQuestions = [...questions];
        const questionIndex = updatedQuestions.findIndex(
            (q) => q.id === questionId
        );
        updatedQuestions[questionIndex].answer = e.target.value;
        setQuestions(updatedQuestions);
    };

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [inputDate, setInputDate] = useState(
        localStorage.getItem("moderator") ? "988 год" : ""
    );
    const [inputName, setInputName] = useState(
        localStorage.getItem("moderator") ? "Крещение Руси" : ""
    );
    const [inputText, setInputText] = useState(
        localStorage.getItem("moderator")
            ? "По совокупности данных исторических  источников крещение Руси  предстает как целенаправленный выбор кн. Владимира, обусловленный его личными религиозными исканиями и комплексом внутри- и внешнеполитических причин (неудовлетворённость языческими культами в качестве национально-консолидирующего фактора, необходимость вступления Древнерусского государства в число мировых  держав и др.). По свидетельству древнерусской традиции, Владимир и его дружина в конце 980-х гг. приняли решение о смене веры после длительного обсуждения и переговоров со странами, принадлежащими к разным вероисповеданиям. В летописи  сохранилось сказание об «испытании вер» кн. Владимиром. Оно  повествует о посольствах в Киев от мусульман из Волжской Булгарии, с латинского Запада, от иудаизированных хазар и из Византии, убеждавших князя принять их веру. Владимир отправил собственные посольства «в болгары», «в немцы», «в греки», чтобы «испытать их службу». После возвращения посольств он остановил свой выбор на христианстве византийского обряда, поразившего послов красотой богослужения. Решение принять христианство в его восточном, православном варианте из Константинополя было связано не только с этим, но и с желанием сохранить важные связи, установившиеся с Византией в предшествующие годы. Не меньшее значение имел престиж Византийской империи, находившейся в то время  в зените могущества. В отношении обстоятельств и времени крещения кн. Владимира в древнерусских источниках нет единства. Согласно «Корсунской легенде» – преданию, которое с рубежа XI–XII вв. вошло в древнерусское летописание, а затем и в Житие св. Владимира, князь принял крещение в захваченном им г. Корсунь, центре византийских  владений в Крыму, в 988 г. (однако фактически взятие Корсуни произошло, вероятнее всего, в 989 г.); там же состоялось бракосочетание Владимира с сестрой византийских  императоров Василия II Болгаробойцы и Константина VIII Анной. Существует и другая  традиция, зафиксированная также уже в XI в., которая приурочивает крещение Владимира к Киеву и ко времени за два года до взятия Корсуни. За крещением князя и его дружины последовало организованное государственной властью массовое крещение жителей крупнейших городов, прежде всего Киева и Новгорода. На первые годы после крещения (не позднее 997 г.) приходится учреждение в Древнерусском государстве митрополии с центром в Киеве, подчинённой Константинопольскому патриархату. Одновременно с митрополией в ней было учреждено не менее трех епархий: в Новгороде, в Белгороде Киевском, а также, вероятно, в Полоцке и/или Чернигове. Первыми епископами были греки. В соответствии с церковной традицией (закрепившейся не ранее XVI в.) первым митрополитом Киевским принято считать свт. Михаила, однако, византийские  источники дают основания предполагать, что первым митрополитом был Феофилакт, переведённый на Русь из Севастийской митрополии (северо-восток Малой Азии). С 990-х гг. на Руси разворачивается деревянное храмостроительство. Согласно «Похвале князю Владимиру» (1040-е гг.), написанной будущим митрополитом Иларионом, при Владимире возникли и первые монастыри. В 995–996 гг. в Киеве была освящена первая каменная Десятинная церковь, вероятно служившая княжеским дворцовым собором. С освящением этой церкви древнерусские  источники связывают меры государственно  власти по материальному обеспечению церковной организации: на её нужды должна была отчисляться десятая часть от совокупных княжеских доходов – десятина, которая собиралась при Десятинном храме. Следствием крещения Руси в законодательной области стало разделение по византийскому образцу княжеской и церковной (митрополичьей, епископской) юрисдикций, которое древнерусская. традиция также относит ко времени правления. Владимира Святославича. В сфере церковного права оказались брачно-семейные отношения, преступления против нравственности, суд над клириками и членами их семей и т. д. Все эти установления нашли отражение в княжеских уставах X-XII  вв. Важнейшей задачей стало обеспечение соборных и приходских храмов русскими  священнослужителями (для чего детей знати насильственно отбирали «на учение книжное»), а также богослужебными книгами. Принятие христианства имело значительные политические последствия. Оно способствовало усилению международного престижа Руси, дальнейшему укреплению и расширению уже традиционных связей с Византией, расширению контактов с южнославянским миром и странами Запада. Крещение Руси было важно и для социальной жизни древнерусского общества. Важнейший постулат христианства исходил из принципа божественной природы верховной власти. Постулат православия о «симфонии властей» превращал церковь в сильную опору власти, давая возможность духовного объединения всего государства и освящения всей системы общественных отношений. Принятие христианства способствовало быстрому укреплению государственных институтов. Крещение Руси вело к национальной консолидации и к развитию культуры. Оно содействовало развитию зодчества и живописи в средневековых её формах, проникновению византийской культуры как наследницы античной традиции. Особенно важным было распространение кириллической письменности и книжной традиции: именно после крещения Руси возникли первые памятники древнерусской письменной культуры."
            : ""
    );
    const [countImages, setCountImages] = useState(
        localStorage.getItem("moderator") ? 6 : 0
    );
    const [inputImages, setInputImages] = useState(
        localStorage.getItem("moderator")
            ? [
                  "https://dailylenta.ru/site/uploads/posts/2018-11/1542180956_fmt_87_24_kreshcheniee.jpg",
                  "https://images.squarespace-cdn.com/content/v1/54412118e4b03de3b6796773/1630747953212-OKHIJQYCVN9QPGG0YHXD/Nuremberg_chronicles_-_CONSTANTINOPEL.png",
                  "https://russkiymir.ru/upload/iblock/b79/b794b90620e0fac5fc0c7fc4917936bf.jpg",
                  "https://archlikbez.ru/wp-content/uploads/2018/11/0012.jpg",
                  "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-file-c6edbd64-8483-47b2-832d-92cf54a66a9b",
                  "https://1.bp.blogspot.com/-LHDj_KxfDFo/YTIx_zGxXGI/AAAAAAAACzg/xIMl9rxuDeMd4vpiN8ou3KIMBWEMGqlZQCLcBGAsYHQ/s935/hello_html_bbf28a2.jpg",
              ]
            : Array(countImages).fill("")
    );
    const [inputVideo, setInputVideo] = useState(
        localStorage.getItem("moderator") ? "https://youtu.be/vwD4vemiK8A" : ""
    );
    const [inputTestTitle, setInputTestTitle] = useState("");

    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: "",
            date: "",
            text: "",
            images: [],
            video: "",
        },
    });
    let navigate = useNavigate();
    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }
    const onSubmit = async (info) => {
        try {
            info.test = questions;
            info.images = inputImages;
            localStorage.setItem("cardview", true);
            await timeout(700);

            navigate("/card?id=8");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container
            maxWidth="xl"
            sx={{
                height: "810px",
            }}
        >
            <Fade>
                <Card
                    sx={{
                        maxWidth: "100%",
                        height: "95vh",
                        borderRadius: "15px",
                        bgcolor: "primary.dark",
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",

                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                overflow: "scroll",
                                "&::-webkit-scrollbar": { display: "none" },
                            }}
                        >
                            <Box sx={{ padding: "10px" }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: "28px", mr: "650px" }}
                                >
                                    Общие данные
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: "18px", pt: "10px" }}
                                >
                                    Название информационного блока
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Controller
                                            control={control}
                                            name="name"
                                            render={({ field }) => (
                                                <CssTextField
                                                    value={inputName}
                                                    onChange={(e) => {
                                                        setInputName(
                                                            e.target.value
                                                        );
                                                        field.onChange(
                                                            e.target.value
                                                        );
                                                    }}
                                                    sx={{ width: "700px" }}
                                                    margin="normal"
                                                    helperText={
                                                        <Typography
                                                            sx={{
                                                                marginLeft:
                                                                    "-14px",
                                                                fontSize:
                                                                    "15px",
                                                            }}
                                                        >
                                                            {
                                                                "Например: Поход Олега на Константинополь"
                                                            }
                                                        </Typography>
                                                    }
                                                    label={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <TitleRoundedIcon
                                                                sx={{
                                                                    fontSize: 20,
                                                                    color: "action.active",
                                                                    marginRight:
                                                                        "5px",
                                                                    marginBottom:
                                                                        "3px",
                                                                }}
                                                            />
                                                            Название
                                                        </Box>
                                                    }
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: "18px", pt: "10px" }}
                                    >
                                        Дата
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Controller
                                            control={control}
                                            name="date"
                                            render={({ field }) => (
                                                <CssTextField
                                                    value={inputDate}
                                                    onChange={(e) => {
                                                        setInputDate(
                                                            e.target.value
                                                        );
                                                        field.onChange(
                                                            e.target.value
                                                        );
                                                    }}
                                                    sx={{ width: "200px" }}
                                                    margin="normal"
                                                    helperText={
                                                        <Typography
                                                            sx={{
                                                                marginLeft:
                                                                    "-14px",
                                                                fontSize:
                                                                    "15px",
                                                            }}
                                                        >
                                                            {
                                                                "Например: 996 год"
                                                            }
                                                        </Typography>
                                                    }
                                                    label={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <CalendarTodayRoundedIcon
                                                                sx={{
                                                                    fontSize: 20,
                                                                    color: "action.active",
                                                                    marginRight:
                                                                        "5px",
                                                                    marginBottom:
                                                                        "3px",
                                                                }}
                                                            />
                                                            Дата
                                                        </Box>
                                                    }
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: "18px", pt: "10px" }}
                                    >
                                        Конспект
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Controller
                                            control={control}
                                            name="text"
                                            render={({ field }) => (
                                                <CssTextField
                                                    value={inputText}
                                                    onChange={(e) => {
                                                        setInputText(
                                                            e.target.value
                                                        );
                                                        setCountImages(
                                                            Math.floor(
                                                                e.target.value
                                                                    .length /
                                                                    900
                                                            ) + 1
                                                        );
                                                        field.onChange(
                                                            e.target.value
                                                        );
                                                    }}
                                                    sx={{
                                                        width: "700px",
                                                        resize: "none",
                                                        "&::-webkit-scrollbar":
                                                            {
                                                                display: "none",
                                                            },
                                                    }}
                                                    margin="normal"
                                                    helperText={
                                                        <Typography
                                                            sx={{
                                                                marginLeft:
                                                                    "-14px",
                                                                fontSize:
                                                                    "15px",
                                                            }}
                                                        >
                                                            {"Введите конспект"}
                                                        </Typography>
                                                    }
                                                    label={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <NotesRoundedIcon
                                                                sx={{
                                                                    fontSize: 20,
                                                                    color: "action.active",
                                                                    marginRight:
                                                                        "5px",
                                                                    marginBottom:
                                                                        "3px",
                                                                }}
                                                            />
                                                            Конспект
                                                        </Box>
                                                    }
                                                    id="filled-multiline-static"
                                                    multiline
                                                    rows={7}
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: "18px", pt: "10px" }}
                                    >
                                        Картинки
                                    </Typography>

                                    {[...new Array(countImages)].map(
                                        (el, index) => (
                                            <Box
                                                key={el}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Controller
                                                    control={control}
                                                    name="images"
                                                    render={({ field }) => (
                                                        <CssTextField
                                                            value={
                                                                inputImages[
                                                                    index
                                                                ]
                                                            } // используем значение из массива переменных состояний по индексу
                                                            onChange={(e) => {
                                                                const newInputImages =
                                                                    [
                                                                        ...inputImages,
                                                                    ]; // создаем новый массив для изменения значения по индексу
                                                                newInputImages[
                                                                    index
                                                                ] =
                                                                    e.target.value; // изменяем значение по индексу
                                                                setInputImages(
                                                                    newInputImages
                                                                ); // сохраняем новый массив переменных состояний
                                                                field.onChange(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                            sx={{
                                                                width: "700px",
                                                            }}
                                                            margin="normal"
                                                            helperText={
                                                                <Typography
                                                                    sx={{
                                                                        marginLeft:
                                                                            "-14px",
                                                                        fontSize:
                                                                            "15px",
                                                                    }}
                                                                >
                                                                    {}
                                                                </Typography>
                                                            }
                                                            label={
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <CollectionsRoundedIcon
                                                                        sx={{
                                                                            fontSize: 20,
                                                                            color: "action.active",
                                                                            marginRight:
                                                                                "5px",
                                                                            marginBottom:
                                                                                "3px",
                                                                        }}
                                                                    />
                                                                    Картинка
                                                                </Box>
                                                            }
                                                            id="filled-multiline-static"
                                                            multiline
                                                            rows={1}
                                                        />
                                                    )}
                                                />
                                            </Box>
                                        )
                                    )}
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: "18px", pt: "10px" }}
                                    >
                                        Видео
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Controller
                                            control={control}
                                            name="video"
                                            render={({ field }) => (
                                                <CssTextField
                                                    value={inputVideo}
                                                    onChange={(e) => {
                                                        setInputVideo(
                                                            e.target.value
                                                        );
                                                        field.onChange(
                                                            e.target.value
                                                        );
                                                    }}
                                                    sx={{ width: "700px" }}
                                                    margin="normal"
                                                    helperText={
                                                        <Typography
                                                            sx={{
                                                                marginLeft:
                                                                    "-14px",
                                                                fontSize:
                                                                    "15px",
                                                            }}
                                                        >
                                                            {
                                                                "Введите ссылку на Youtube видео"
                                                            }
                                                        </Typography>
                                                    }
                                                    label={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <FastForwardRoundedIcon
                                                                sx={{
                                                                    fontSize: 20,
                                                                    color: "action.active",
                                                                    marginRight:
                                                                        "5px",
                                                                    marginBottom:
                                                                        "3px",
                                                                }}
                                                            />
                                                            Видео
                                                        </Box>
                                                    }
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: "18px", pt: "10px" }}
                                    >
                                        Тестирование
                                    </Typography>
                                    <SwipeableViews
                                        axis={
                                            theme.direction === "rtl"
                                                ? "x-reverse"
                                                : "x"
                                        }
                                        index={activeStep}
                                        onChangeIndex={handleStepChange}
                                        enableMouseEvents
                                    >
                                        {questions.map((question, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    width: "120px",
                                                    flexDirection: "column",
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontSize: "25px",
                                                        pt: "10px",
                                                    }}
                                                >
                                                    {`Вопрос ${index + 1}`}
                                                </Typography>
                                                <Controller
                                                    control={control}
                                                    name="test"
                                                    render={({ field }) => (
                                                        <CssTextField
                                                            value={
                                                                question.question
                                                            }
                                                            onChange={(e) =>
                                                                handleQuestionChange(
                                                                    e,
                                                                    question.id
                                                                )
                                                            }
                                                            sx={{
                                                                width: "700px",
                                                            }}
                                                            margin="normal"
                                                            label={
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <HelpCenterRoundedIcon
                                                                        sx={{
                                                                            fontSize: 20,
                                                                            color: "action.active",
                                                                            marginRight:
                                                                                "5px",
                                                                            marginBottom:
                                                                                "3px",
                                                                        }}
                                                                    />
                                                                    Заголовок
                                                                    вопроса
                                                                </Box>
                                                            }
                                                        />
                                                    )}
                                                />
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        width: "850px",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                        }}
                                                    >
                                                        {question.options.map(
                                                            (option, index) => (
                                                                <Controller
                                                                    key={index}
                                                                    control={
                                                                        control
                                                                    }
                                                                    name="test"
                                                                    render={({
                                                                        field,
                                                                    }) => (
                                                                        <CssTextField
                                                                            value={
                                                                                option
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleOptionChange(
                                                                                    e,
                                                                                    question.id,
                                                                                    index
                                                                                )
                                                                            }
                                                                            sx={{
                                                                                width: "300px",
                                                                            }}
                                                                            margin="normal"
                                                                            label={
                                                                                <Box
                                                                                    sx={{
                                                                                        display:
                                                                                            "flex",
                                                                                        alignItems:
                                                                                            "center",
                                                                                    }}
                                                                                >
                                                                                    <QuestionAnswerRoundedIcon
                                                                                        sx={{
                                                                                            fontSize: 20,
                                                                                            color: "action.active",
                                                                                            marginRight:
                                                                                                "5px",
                                                                                            marginBottom:
                                                                                                "3px",
                                                                                        }}
                                                                                    />
                                                                                    {`Вариант ответа ${
                                                                                        index +
                                                                                        1
                                                                                    }`}
                                                                                </Box>
                                                                            }
                                                                        />
                                                                    )}
                                                                />
                                                            )
                                                        )}
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                        }}
                                                    >
                                                        <Controller
                                                            control={control}
                                                            name="explanation"
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <CssTextField
                                                                    value={
                                                                        question.explanation
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleExplanationChange(
                                                                            e,
                                                                            question.id
                                                                        )
                                                                    }
                                                                    sx={{
                                                                        width: "500px",

                                                                        pr: "150px",
                                                                        resize: "none",
                                                                        "&::-webkit-scrollbar":
                                                                            {
                                                                                display:
                                                                                    "none",
                                                                            },
                                                                    }}
                                                                    margin="normal"
                                                                    label={
                                                                        <Box
                                                                            sx={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <InfoIcon
                                                                                sx={{
                                                                                    fontSize: 20,
                                                                                    color: "action.active",
                                                                                    marginRight:
                                                                                        "5px",
                                                                                    marginBottom:
                                                                                        "3px",
                                                                                }}
                                                                            />
                                                                            Объяснение
                                                                        </Box>
                                                                    }
                                                                    id="filled-multiline-static"
                                                                    multiline
                                                                    rows={8}
                                                                />
                                                            )}
                                                        />
                                                        <FormControl
                                                            sx={{
                                                                width: "350px",
                                                                mt: "15px",
                                                                "& .MuiOutlinedInput-root":
                                                                    {
                                                                        "& fieldset":
                                                                            {
                                                                                borderColor:
                                                                                    "white",
                                                                            },
                                                                        "&:hover fieldset":
                                                                            {
                                                                                borderColor:
                                                                                    "white",
                                                                            },
                                                                        "&.Mui-focused fieldset":
                                                                            {
                                                                                borderColor:
                                                                                    "white",
                                                                            },
                                                                    },
                                                            }}
                                                        >
                                                            <Select
                                                                sx={{}}
                                                                labelId="demo-simple-select-helper-label"
                                                                id="demo-simple-select-helper"
                                                                value={
                                                                    question.answer
                                                                }
                                                                onChange={(e) =>
                                                                    handleAnswerChange(
                                                                        e,
                                                                        question.id
                                                                    )
                                                                }
                                                            >
                                                                {question.options.map(
                                                                    (
                                                                        option,
                                                                        index
                                                                    ) => (
                                                                        <MenuItem
                                                                            key={
                                                                                option
                                                                            }
                                                                            value={
                                                                                index +
                                                                                1
                                                                            }
                                                                        >
                                                                            {
                                                                                option
                                                                            }
                                                                        </MenuItem>
                                                                    )
                                                                )}
                                                            </Select>
                                                            <FormHelperText
                                                                sx={{
                                                                    ml: "0px",
                                                                }}
                                                            >
                                                                Выберите
                                                                правильный
                                                                вариант ответа
                                                            </FormHelperText>
                                                        </FormControl>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))}
                                    </SwipeableViews>
                                    <MobileStepper
                                        variant="dots"
                                        steps={5}
                                        position="static"
                                        activeStep={activeStep}
                                        sx={{
                                            width: "703px",
                                            flexGrow: 1,
                                            mt: "20px",
                                            color: "white",
                                            border: "1px solid",
                                            backgroundColor: "#2f251c",
                                            "& .MuiMobileStepper-dot": {
                                                backgroundColor: "gray",
                                            },
                                            "& .MuiMobileStepper-dotActive": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        nextButton={
                                            <Button
                                                size="small"
                                                onClick={handleNext}
                                                disabled={activeStep === 4}
                                                sx={{ color: "white" }}
                                            >
                                                Далее
                                                {theme.direction === "rtl" ? (
                                                    <KeyboardArrowLeft
                                                        sx={{
                                                            color: "white",
                                                        }}
                                                    />
                                                ) : (
                                                    <KeyboardArrowRight />
                                                )}
                                            </Button>
                                        }
                                        backButton={
                                            <Button
                                                size="small"
                                                onClick={handleBack}
                                                disabled={activeStep === 0}
                                                sx={{ color: "white" }}
                                            >
                                                {theme.direction === "rtl" ? (
                                                    <KeyboardArrowRight />
                                                ) : (
                                                    <KeyboardArrowLeft />
                                                )}
                                                Назад
                                            </Button>
                                        }
                                    />
                                    <Box
                                        sx={{
                                            marginTop: "30px",
                                            display: "flex",
                                            justifyContent: "start",
                                        }}
                                    >
                                        <ColorButton
                                            type="submit"
                                            variant="outlined"
                                        >
                                            {localStorage.getItem("moderator")
                                                ? "Отправить заявку"
                                                : "Создать"}
                                        </ColorButton>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                        <Card
                            sx={{
                                mt: "45px",
                                width: "500px",
                                height: "700px",
                                bgcolor: "primary.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "15px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: "28px" }}
                                >
                                    Итоговый вид карточки:
                                </Typography>
                                <CardContent>
                                    <AddInformationCustomCard
                                        name={inputName}
                                        date={inputDate}
                                        text={inputText}
                                        images={inputImages[0]}
                                    />
                                </CardContent>
                            </Box>
                        </Card>
                    </CardContent>
                </Card>
            </Fade>
        </Container>
    );
};

CreateInformationBlockPage.propTypes = {};

export default CreateInformationBlockPage;
