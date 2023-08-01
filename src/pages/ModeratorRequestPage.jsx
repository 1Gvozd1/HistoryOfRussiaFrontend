import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import {
    Card,
    CardContent,
    Container,
    styled,
    Tab,
    Tabs,
    Button,
    CardMedia,
} from "@mui/material";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

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

function createData(name, date, type, title, element, price) {
    return {
        name,
        date,
        type,
        title,
        element,
        price,
        history: [
            {
                date: "2020-01-05",
                customerId: "11091700",
                amount: 3,
            },
            {
                date: "2020-01-02",
                customerId: "Anonymous",
                amount: 1,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [view, setView] = React.useState(true);
    let navigate = useNavigate();

    return (
        <React.Fragment>
            <TableRow
                sx={{
                    "& > *": { borderBottom: "unset" },
                    display: view ? null : "none",
                }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Chip
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: "#99FFFF",
                                    pl: "1px",
                                    pt: "1px",
                                }}
                            >
                                {row.name[0]}
                            </Avatar>
                        }
                        label={row.name}
                        variant="outlined"
                    />
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    {row.date}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    <Chip
                        label={row.type}
                        sx={{
                            color: "white",
                            bgcolor: "primary.dark",
                            borderColor: "#CCFFCC",
                        }}
                        variant="outlined"
                    />
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    {row.title}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    {row.element}
                </TableCell>
            </TableRow>
            <TableRow sx={{ bgcolor: "primary.dark" }}>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            sx={{
                                margin: 1,
                                height: "380px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box sx={{ textAlign: "center", mr: "30px" }}>
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    component="div"
                                >
                                    Оригинал
                                </Typography>
                                <Card
                                    sx={{
                                        width: "450px",
                                        height: "250px",
                                        borderRadius: "15px",
                                        bgcolor: "primary.main",

                                        boxShadow:
                                            "rgb(129,79,10) 0px 0px 0px 3px",
                                    }}
                                >
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            height="220px"
                                            image="https://archlikbez.ru/wp-content/uploads/2018/11/0012.jpg"
                                            alt="Paella dish"
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    component="div"
                                >
                                    Версия модератора
                                </Typography>
                                <Card
                                    sx={{
                                        width: "450px",
                                        height: "250px",
                                        borderRadius: "15px",
                                        bgcolor: "primary.main",
                                    }}
                                >
                                    <CardContent>
                                        <CardContent>
                                            <CardMedia
                                                component="img"
                                                height="200px"
                                                image="https://cultvibe.ru/wp-content/uploads/2022/08/img13.jpg"
                                                alt="Paella dish"
                                            />
                                        </CardContent>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    pt: "50px",
                                }}
                            >
                                <ColorButton
                                    onClick={() => {
                                        setOpen(!open);
                                        localStorage.setItem("image", true);
                                        setView(false);
                                    }}
                                    variant="outlined"
                                    sx={{
                                        ml: "20px",
                                        mb: "20px",
                                        borderColor: "#CCFFCC",
                                        color: "#CCFFCC",
                                    }}
                                >
                                    Принять
                                </ColorButton>
                                <ColorButton
                                    onClick={() => {
                                        setOpen(!open);
                                        setView(false);
                                    }}
                                    variant="outlined"
                                    sx={{
                                        ml: "20px",
                                        borderColor: "#FF9999",
                                        color: "#FF9999",
                                    }}
                                >
                                    Отклонить
                                </ColorButton>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

function Row2(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [view, setView] = React.useState(true);

    return (
        <React.Fragment>
            <TableRow
                sx={{
                    "& > *": { borderBottom: "unset" },
                    display: view ? null : "none",
                }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Chip
                        avatar={
                            <Avatar
                                sx={{
                                    bgcolor: "#99FFFF",
                                    pl: "1px",
                                    pt: "1px",
                                }}
                            >
                                {row.name[0]}
                            </Avatar>
                        }
                        label={row.name}
                        variant="outlined"
                    />
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    {row.date}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    <Chip
                        label={row.type}
                        sx={{
                            color: "white",
                            bgcolor: "primary.dark",
                            borderColor: "#CCFFCC",
                        }}
                        variant="outlined"
                    />
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    {row.title}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "17px" }}>
                    {row.element}
                </TableCell>
            </TableRow>
            <TableRow sx={{ bgcolor: "primary.dark" }}>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            sx={{
                                margin: 1,
                                height: "380px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box sx={{ textAlign: "center", mr: "30px" }}>
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    component="div"
                                >
                                    Оригинал
                                </Typography>
                                <Card
                                    sx={{
                                        maxWidth: "450px",
                                        height: "250px",
                                        borderRadius: "15px",
                                        bgcolor: "primary.main",

                                        boxShadow:
                                            "rgb(129,79,10) 0px 0px 0px 3px",
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            color="text.primary"
                                            sx={{
                                                margin: 0,
                                                fontSize: 16,
                                                textAlign: "justify",
                                                visibility: "visible",
                                                maxHeight: "100%",
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                cursor: "default",
                                            }}
                                        >
                                            <span style={{ color: "#df8886" }}>
                                                По совокупности данных
                                                исторических источников крещение
                                                Руси предстает как
                                                целенаправленный выбор кн.
                                                Владимира
                                            </span>
                                            , обусловленный его личными
                                            религиозными исканиями и комплексом
                                            внутри- и внешнеполитических причин
                                            (неудовлетворённость языческими
                                            культами в качестве
                                            национально-консолидирующего
                                            фактора, необходимость вступления
                                            Древнерусского государства в число
                                            мировых держав и др.)
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    component="div"
                                >
                                    Версия модератора
                                </Typography>
                                <Card
                                    sx={{
                                        maxWidth: "450px",
                                        height: "250px",
                                        borderRadius: "15px",
                                        bgcolor: "primary.main",
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            color="text.primary"
                                            sx={{
                                                margin: 0,
                                                fontSize: 16,
                                                textAlign: "justify",
                                                visibility: "visible",
                                                maxHeight: "100%",
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                cursor: "default",
                                            }}
                                        >
                                            <span style={{ color: "#CCFFCC" }}>
                                                Исходя из анализа различных
                                                исторических источников, можно
                                                заключить, что крещение Руси
                                                было произведено по решению
                                                князя Владимира
                                            </span>
                                            , обусловленный его личными
                                            религиозными исканиями и комплексом
                                            внутри- и внешнеполитических причин
                                            (неудовлетворённость языческими
                                            культами в качестве
                                            национально-консолидирующего
                                            фактора, необходимость вступления
                                            Древнерусского государства в число
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    pt: "50px",
                                }}
                            >
                                <ColorButton
                                    onClick={() => setOpen(!open)}
                                    variant="outlined"
                                    sx={{
                                        ml: "20px",
                                        mb: "20px",
                                        borderColor: "#CCFFCC",
                                        color: "#CCFFCC",
                                    }}
                                >
                                    Принять
                                </ColorButton>
                                <ColorButton
                                    onClick={() => {
                                        setOpen(!open);
                                        setView(false);
                                    }}
                                    variant="outlined"
                                    sx={{
                                        ml: "20px",
                                        borderColor: "#FF9999",
                                        color: "#FF9999",
                                    }}
                                >
                                    Отклонить
                                </ColorButton>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        element: PropTypes.string,
    }).isRequired,
};

Row2.propTypes = {
    row: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        element: PropTypes.string,
    }).isRequired,
};

const rows = [
    createData(
        "USER",
        "10.04.2023",
        "Редактирование",
        "Река времени - Крещение Руси",
        "Картинки",
        3.99
    ),
    createData(
        "USER",
        "10.04.2023",
        "Редактирование",
        "Река времени - Крещение Руси",
        "Конспект",
        3.99
    ),
];

const ModeratorRequestPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [view, setView] = React.useState(localStorage.getItem("view"));
    return (
        <Fade>
            <Container
                maxWidth="xl"
                sx={{
                    height: "810px",
                }}
            >
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
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{ textAlign: "center", mt: "10px", mb: "20px" }}
                        >
                            <Typography variant="h3">
                                {" "}
                                Заявки от модераторов
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: "divider",
                                mb: "30px",
                            }}
                        >
                            <Tabs
                                indicatorColor="secondary"
                                textColor="white"
                                centered
                                aria-label="full width tabs example"
                            >
                                <Tab
                                    label="Редактирование"
                                    sx={{
                                        border: 1,
                                        borderTop: "1px",
                                        borderRight: "1px",
                                        borderLeft: "1px",
                                        borderColor: "white",
                                    }}
                                />
                                <Tab label="Создание" />

                                <Tab label="Удаление" />
                            </Tabs>
                        </Box>
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell sx={{ fontSize: "20px" }}>
                                            Модератор
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{ fontSize: "20px" }}
                                        >
                                            Дата запроса
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{ fontSize: "20px" }}
                                        >
                                            Тип запроса
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{ fontSize: "20px" }}
                                        >
                                            Название информационного блока
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{ fontSize: "20px" }}
                                        >
                                            Измененный элемент
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <Row row={rows[0]} />
                                    <Row2 row={rows[1]} />
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
        </Fade>
    );
};

export default ModeratorRequestPage;
