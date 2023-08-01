import React, { useRef, useState, useContext } from "react";
import PropTypes from "prop-types";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
    Card,
    Box,
    CardMedia,
    CardContent,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    styled,
    TextField,
    Link,
    FormHelperText,
    CardHeader,
} from "@mui/material";
import { useForm, Controller, useFormState } from "react-hook-form";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { Link as RouterLink, redirect, useNavigate } from "react-router-dom";
import AuthService from "api/service/AuthService";
import { Context } from "app/Hooks/Context";

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

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    minWidth: "320px",
    minHeight: "50px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const LoginForm = ({ setShowLogin }) => {
    let navigate = useNavigate();
    const [error, setError] = useState(null);
    const { user, setUser } = useContext(Context);
    const { handleSubmit, control } = useForm({
        defaultValues: {
            login: "",
            password: "",
        },
    });
    const { errors } = useFormState({
        control,
    });
    const onSubmit = async (info) => {
        try {
            const { data } = await AuthService.login(info.login, info.password);
            console.log(localStorage.getItem("moderator"));
            console.log(data.user?.roles[0] == "USER");
            if (
                data.user?.roles[0] == "USER" &&
                localStorage.getItem("moderator")
            ) {
                data.user.roles[0] = "MODERATOR";
            }
            setUser(data.user);

            console.log(data.user);
            localStorage.setItem("accessToken", data.accessToken);
            return navigate("/");
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);
        }
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRegister = () => setShowLogin((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Card
            sx={{
                maxWidth: "350px",
                height: "830px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: "px",
                }}
            >
                <CardMedia
                    component="img"
                    height="250"
                    image="https://multiurok.ru/img/384233/image_5aa2e8ecd745d.jpg"
                    alt="Paella dish"
                />
            </Box>
            <CardContent sx={{}}>
                <Typography
                    component={"span"}
                    variant="h6"
                    color="text.primary"
                    sx={{
                        marginBottom: "4px",
                        fontSize: 30,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Вход
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{
                        margin: 0,
                        fontSize: 14,
                        visibility: "visible",
                        maxHeight: "150px",
                        WebkitLineClamp: "2",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Пожалуйста, войдите, чтобы продолжить.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            control={control}
                            name="login"
                            rules={{
                                required: "Обязательно для заполнения",
                                validate: (value) => {
                                    if (
                                        !value.match(
                                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                                        )
                                    ) {
                                        return "Email введен некорректно";
                                    }

                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <CssTextField
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.login?.message}
                                    helperText={
                                        <Typography
                                            sx={{
                                                marginLeft: "-14px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            {errors.login?.message
                                                ? errors.login?.message
                                                : "Ваша почта"}
                                        </Typography>
                                    }
                                    label={
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <MailOutlineRoundedIcon
                                                sx={{
                                                    fontSize: 20,
                                                    color: "action.active",
                                                    marginRight: "5px",
                                                    marginBottom: "3px",
                                                }}
                                            />
                                            Email
                                        </Box>
                                    }
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: "Обязательно для заполнения",
                                validate: (value) => {
                                    if (value.length < 6) {
                                        return "Должен быть больше 6 символов";
                                    }

                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.password?.message}
                                    sx={{
                                        "& label.Mui-focused": {
                                            color: "#FFF",
                                            left: "-3px",
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottomColor: "#FFF",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#d1d1dc",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#FFF",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#FFF",
                                            },
                                        },
                                    }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <LockOpenRoundedIcon
                                                sx={{
                                                    fontSize: 20,
                                                    color: "action.active",
                                                    marginRight: "4px",
                                                    marginBottom: "4px",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    backgroundColor:
                                                        "primary.dark",
                                                    width: "65px",
                                                }}
                                            >
                                                Пароль
                                            </Typography>
                                        </Box>
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                    <FormHelperText
                                        sx={{
                                            marginLeft: "0px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        {errors.password?.message
                                            ? errors.password?.message
                                            : "Ваш пароль"}
                                    </FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Box>

                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <ColorButton type="submit" variant="outlined">
                            Войти
                        </ColorButton>
                    </Box>
                </form>

                <Box
                    sx={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Link
                        component={RouterLink}
                        to={"/recovery"}
                        variant="h6"
                        href="#"
                        underline="none"
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        {"Забыли пароль?"}
                    </Link>
                </Box>
                <Box
                    sx={{
                        height: "100px",
                        marginTop: "10px",
                        marginBottom: "20px",
                    }}
                >
                    <Typography
                        sx={{
                            color: "red",
                            textAlign: "center",
                        }}
                    >
                        {error}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        color="text.secondary"
                        sx={{
                            marginRight: "5px",
                            fontSize: 14,
                            visibility: "visible",
                            maxHeight: "150px",
                            WebkitLineClamp: "2",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Нет аккаунта?
                    </Typography>
                    <Link
                        variant="h6"
                        href="#"
                        underline="none"
                        onClick={handleClickShowRegister}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        {"Зарегистрируйтесь"}
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};

LoginForm.propTypes = {
    setShowLogin: PropTypes.func,
};

export default LoginForm;
