import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Card, Container } from "@mui/material";
import { Fade } from "react-reveal";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: `${theme.palette.background.default}`,

    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    paddingLeft: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",

    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, 0)",

    flexDirection: "row",
    fontSize: "25px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },

    "& .MuiAccordionSummary-content": {},
    "&:focus-within": {
        borderBottom: `1px solid white`,
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    paddingLeft: "0px",
    paddingTop: "40px",
    paddingBottom: "40px",
    fontSize: "21px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQPage = () => {
    const [expanded, setExpanded] = React.useState("");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container maxWidth="xl">
            <Fade>
                <Card
                    sx={{
                        ml: "250px",
                        width: "1000px",
                        height: "1000px",
                        boxShadow: "none",
                        background: "rgba(0, 0, 0, 0)",
                    }}
                >
                    <Box sx={{ textAlign: "center", mt: "30px", mb: "30px" }}>
                        <Typography
                            component={"span"}
                            variant="h6"
                            color="text.primary"
                            sx={{
                                marginBottom: "4px",
                                fontSize: 40,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                        >
                            {"Часто задаваемые вопросы"}
                        </Typography>
                    </Box>
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            Как я могу зарегистрироваться на этом
                            веб-приложении?
                        </AccordionSummary>
                        <AccordionDetails>
                            {`Чтобы зарегистрироваться на нашем веб-приложении, просто
                        нажмите на кнопку "Войти" на главной странице и следуйте
                        инструкциям.`}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            {`Сколько времени мне потребуется, чтобы пройти курс "История России"?`}
                        </AccordionSummary>
                        <AccordionDetails>
                            {`Продолжительность курса "История России" зависит от
                            вашего собственного темпа и уровня знаний. Но в
                            среднем, чтобы пройти курс, может потребоваться
                            примерно 6-8 недель.`}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            Каковы требования к компьютеру, чтобы использовать
                            это веб-приложение?
                        </AccordionSummary>
                        <AccordionDetails>
                            Для использования нашего веб-приложения вам
                            необходим только компьютер с доступом в Интернет и
                            браузером. Рекомендуем использовать последнюю версию
                            Google Chrome или Mozilla Firefox.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                    >
                        <AccordionSummary
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                        >
                            {`Как часто обновляется курс "История России"?`}
                        </AccordionSummary>
                        <AccordionDetails>
                            {`Курс "История России" регулярно обновляется, чтобы отражать новые исследования и открытия в истории России. Мы также регулярно добавляем новые материалы и контент в курс.`}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel5"}
                        onChange={handleChange("panel5")}
                    >
                        <AccordionSummary
                            aria-controls="panel5d-content"
                            id="panel5d-header"
                        >
                            {`Как я могу получить дополнительную помощь, если у меня возникли проблемы в процессе обучения?`}
                        </AccordionSummary>
                        <AccordionDetails>
                            {`Если у вас возникли какие-либо проблемы или трудности в процессе обучения, пожалуйста, свяжитесь с нашей службой поддержки. Мы всегда готовы помочь вам решить любые проблемы и ответить на ваши вопросы.`}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel6"}
                        onChange={handleChange("panel6")}
                    >
                        <AccordionSummary
                            aria-controls="panel6d-content"
                            id="panel6d-header"
                        >
                            {`Какие материалы входят в курс "История России"?`}
                        </AccordionSummary>
                        <AccordionDetails>
                            {`Курс "История России" включает в себя широкий спектр материалов, включая лекции, видеоматериалы, тесты и задания. Вы также найдете множество источников, рекомендованных для дополнительного чтения и изучения.`}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel7"}
                        onChange={handleChange("panel7")}
                    >
                        <AccordionSummary
                            aria-controls="panel7d-content"
                            id="panel7d-header"
                        >
                            {`Могу ли я использовать материалы курса "История России" в своих исследованиях?`}
                        </AccordionSummary>
                        <AccordionDetails>
                            {`Да, вы можете использовать материалы курса "История России" в своих исследованиях и работах. Мы с радостью поддерживаем академическую свободу и поощряем студентов использовать наш контент для своих образовательных целей.`}
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Fade>
        </Container>
    );
};

FAQPage.propTypes = {};

export default FAQPage;
