import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
    Avatar,
    Card,
    CardHeader,
    Button,
    Box,
    Badge,
    styled,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { red } from "@mui/material/colors";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "app/Hooks/Context";
import AuthService from "api/service/AuthService";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const drawerWidth = 225;

const menuUser = [
    {
        title: "Главная",
        icon: (
            <HomeRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/",
    },
    {
        title: "Река времени",
        icon: (
            <FastForwardRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/river",
    },
    {
        title: "Личности",
        icon: (
            <GroupsRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/persons",
    },
    {
        title: "События",
        icon: (
            <WhatshotRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/events",
    },
    {
        title: "Карта",
        icon: (
            <MapRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/map",
    },
    {
        title: "Профиль",
        icon: (
            <PersonRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/profile",
    },
    {
        title: "FAQ",
        icon: (
            <QuizRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/FAQ",
    },
];
const menuAdmin = [
    {
        title: "Пользователи",
        icon: (
            <GroupRoundedIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/users",
    },
    {
        title: "Запросы",
        icon: (
            <InventoryRoundedIcon
                sx={{
                    fontSize: 26,
                }}
            />
        ),
        to: "/requests",
    },
];
const menuModerator = [
    {
        title: "Завки",
        icon: (
            <NotificationsActiveIcon
                sx={{
                    fontSize: 28,
                }}
            />
        ),
        to: "/users",
    },
];

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

const NavBar = ({ children }) => {
    const { user, setUser } = useContext(Context);
    console.log(user);
    let navigate = useNavigate();
    const handleClickNavigateLogin = () => {
        return navigate("/login");
    };

    const [path, setPath] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    const handleClickLogout = async () => {
        try {
            localStorage.removeItem("accessToken");
            const { data } = await AuthService.logout();
            console.log(data);

            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Card sx={{}}>
                {user ? (
                    <CardHeader
                        sx={{
                            justifyContent: "center",
                        }}
                        avatar={
                            <ListItemButton
                                sx={{
                                    marginRight: 0,
                                    padding: 0,
                                    borderRadius: "100px",
                                    "& :hover": {
                                        transition: "none",
                                    },
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor:
                                            user?.roles == "ADMIN"
                                                ? "#f44336 "
                                                : user?.roles == "MODERATOR"
                                                ? "#99FFFF"
                                                : "#bbbbbb",
                                        width: "35px",
                                        height: "35px",
                                    }}
                                    aria-label="recipe"
                                >
                                    {user?.username[0]}
                                </Avatar>
                            </ListItemButton>
                        }
                        action={
                            <ListItemButton
                                sx={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    borderRadius: "100px",
                                    transition: "none",
                                    marginTop: 1,
                                }}
                            >
                                <LogoutRoundedIcon
                                    onClick={handleClickLogout}
                                    sx={{
                                        fontSize: 25,
                                        color: "action.active",
                                    }}
                                />
                            </ListItemButton>
                        }
                        title={
                            <Box>
                                <Typography
                                    sx={{
                                        width: "115px",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        fontSize: 15,
                                        cursor: "default",
                                    }}
                                >
                                    {user.username}
                                </Typography>
                            </Box>
                        }
                        subheader={
                            <Typography
                                sx={{
                                    fontSize: 11,
                                    cursor: "default",
                                    color: "action.active",
                                }}
                            >
                                {user?.roles[0]}
                            </Typography>
                        }
                    />
                ) : (
                    <CardHeader
                        sx={{
                            justifyContent: "center",
                        }}
                        title={
                            <Box>
                                <ColorButton
                                    onClick={handleClickNavigateLogin}
                                    variant="outlined"
                                >
                                    Войти
                                </ColorButton>
                            </Box>
                        }
                    />
                )}
            </Card>
            <Divider
                sx={{
                    bgcolor: "primary.dark",
                    //marginBottom: "10px",
                }}
            />
            <List sx={{ maxWidth: "90%" }}>
                {menuUser.map((item, index) =>
                    index == 5 && !user ? null : (
                        <ListItem
                            key={item.title}
                            component={RouterLink}
                            to={item.to}
                            disablePadding
                            sx={{
                                textDecoration: "none",
                                color: "text.primary",
                                marginLeft: "7px",
                                marginTop: "4px",
                                marginBottom: "7px",
                                "& :hover": {
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    backgroundColor:
                                        path === item.to
                                            ? "#814f0a"
                                            : "theme.palette.primary.main",
                                    borderRadius: "10px",
                                    transition: "none",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "39px",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider
                sx={{
                    bgcolor: "primary.dark",
                }}
            />
            {user?.roles[0] !== "ADMIN" ? null : (
                <List sx={{ maxWidth: "90%" }}>
                    {menuAdmin.map((item) =>
                        user?.roles[0] !== "ADMIN" ? null : (
                            <ListItem
                                key={item.title}
                                component={RouterLink}
                                to={item.to}
                                disablePadding
                                sx={{
                                    textDecoration: "none",
                                    color: "text.primary",
                                    marginLeft: "7px",
                                    marginTop: "4px",
                                    marginBottom: "4px",
                                    "& :hover": {
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        backgroundColor:
                                            path === item.to
                                                ? "#814f0a"
                                                : "theme.palette.primary.main",
                                        borderRadius: "10px",
                                        transition: "none",
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "39px",
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            )}

            <List sx={{ maxWidth: "90%", mt: "10px" }}>
                {menuModerator.map((item) =>
                    user?.roles[0] !== "MODERATOR" ? null : (
                        <ListItem
                            key={item.title}
                            component={RouterLink}
                            to={item.to}
                            disablePadding
                            sx={{
                                textDecoration: "none",
                                color: "text.primary",
                                marginLeft: "7px",
                                marginTop: "4px",
                                marginBottom: "4px",
                                "& :hover": {
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    backgroundColor:
                                        path === item.to
                                            ? "#814f0a"
                                            : "theme.palette.primary.main",
                                    borderRadius: "10px",
                                    transition: "none",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "39px",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            {user?.roles[0] == "ADMIN" ? (
                <Divider
                    sx={{
                        bgcolor: "primary.dark",
                    }}
                />
            ) : null}

            {children}
        </Drawer>
    );
};

NavBar.propTypes = {
    children: PropTypes.any,
};

export default NavBar;
