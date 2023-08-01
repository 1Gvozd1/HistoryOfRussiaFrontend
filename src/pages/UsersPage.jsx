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
} from "@mui/material";
import { Fade } from "react-reveal";

import Fingerprint from "@mui/icons-material/Fingerprint";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

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

const UsersPage = () => {
    const [moderator, setModerator] = React.useState(false);

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
                                Список пользователей
                            </Typography>
                        </Box>

                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 650 }}
                                size="small"
                                aria-label="a dense table"
                            >
                                <TableHead sx={{ height: "100px" }}>
                                    <TableRow>
                                        <TableCell
                                            variant="h1"
                                            align="center"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            ID
                                        </TableCell>
                                        <TableCell
                                            variant="h1"
                                            align="center"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            Пользователь
                                        </TableCell>
                                        <TableCell
                                            variant="h1"
                                            align="center"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            Почта
                                        </TableCell>
                                        <TableCell
                                            variant="h1"
                                            align="center"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            Роль
                                        </TableCell>
                                        <TableCell
                                            variant="h1"
                                            align="center"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            Дата регистрации
                                        </TableCell>
                                        <TableCell
                                            variant="h1"
                                            align="center"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            Смена роли
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                        sx={{
                                            height: "100px",
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            000001
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ pr: "20px" }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "60px",
                                                    width: "140px",
                                                    border: "1px solid white",
                                                    borderRadius: "25px",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-evenly",
                                                    alignItems: "center",
                                                    marginLeft: "50px",
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        bgcolor: "#f44336",

                                                        width: 40,
                                                        height: 40,
                                                    }}
                                                >
                                                    M
                                                </Avatar>
                                                <Typography
                                                    sx={{ fontSize: "20px" }}
                                                >
                                                    MOLOT
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            eric01.01@mail.ru
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            Администратор
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            10.03.2023
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        ></TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{
                                            height: "100px",
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            000002
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ pr: "20px" }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "60px",
                                                    width: "140px",
                                                    border: "1px solid white",
                                                    borderRadius: "25px",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-evenly",
                                                    alignItems: "center",
                                                    marginLeft: "50px",
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        bgcolor: moderator
                                                            ? "#99fefe"
                                                            : "#bbbbbb",

                                                        width: 40,
                                                        height: 40,
                                                    }}
                                                >
                                                    U
                                                </Avatar>
                                                <Typography
                                                    sx={{ fontSize: "20px" }}
                                                >
                                                    USER
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            captain01.01@mail.ru
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            {moderator
                                                ? "Модератор"
                                                : "Пользователь"}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            10.04.2023
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontSize: "23px",
                                            }}
                                        >
                                            <IconButton
                                                aria-label="fingerprint"
                                                onClick={() => {
                                                    setModerator(true);
                                                    localStorage.setItem(
                                                        "moderator",
                                                        true
                                                    );
                                                }}
                                            >
                                                <ArrowCircleUpIcon
                                                    sx={{
                                                        fontSize: "50px",
                                                        color: "#CCFFCC",
                                                    }}
                                                />
                                            </IconButton>
                                            <IconButton
                                                aria-label="fingerprint"
                                                onClick={() => {
                                                    setModerator(false);
                                                    localStorage.setItem(
                                                        "moderator",
                                                        false
                                                    );
                                                }}
                                            >
                                                <ArrowCircleDownIcon
                                                    sx={{
                                                        fontSize: "50px",
                                                        color: "#FF9999",
                                                    }}
                                                />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
        </Fade>
    );
};

export default UsersPage;
