import React, { useRef, useState } from "react";
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
    CardHeader,
    Avatar,
    FormHelperText,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm, useFormState } from "react-hook-form";
import AuthService from "api/service/AuthService";
import { Link as RouterLink, redirect, useNavigate } from "react-router-dom";

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

const RegisterForm = ({ setShowLogin }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    let navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowLogin = () => setShowLogin((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: "",
            login: "",
            password: "",
            passwordRepeat: "",
        },
    });
    const { errors } = useFormState({
        control,
    });

    const onSubmit = async (info) => {
        try {
            const { data } = await AuthService.register(
                info.name,
                info.login,
                info.password
            );
            setUser(data.user);
            console.log(data);
            return navigate("/activation");
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);
        }
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
                }}
            >
                <CardHeader
                    sx={{
                        height: "40px",
                        paddingLeft: "5px",
                    }}
                    action={
                        <IconButton
                            aria-label="back"
                            onClick={handleClickShowLogin}
                        >
                            <KeyboardBackspaceRoundedIcon
                                sx={{
                                    fontSize: 25,
                                }}
                            />
                        </IconButton>
                    }
                />
            </Box>

            <CardContent>
                <Typography
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
                    Создайте аккаунт
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
                    Пожалуйста, заполните поля ниже.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            control={control}
                            name="name"
                            rules={{
                                required: "Обязательно для заполнения",
                                validate: (value) => {
                                    // if (!value.match(/^[a-zA-Z0-9]{5,}$/)) {
                                    //     return "Имя пользователя введено некорректно";
                                    // }

                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <CssTextField
                                    fullWidth
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.name?.message}
                                    helperText={
                                        <Typography
                                            sx={{
                                                marginLeft: "-14px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            {errors.name?.message
                                                ? errors.name?.message
                                                : "Ваше имя"}
                                        </Typography>
                                    }
                                    label={
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <PersonOutlineRoundedIcon
                                                sx={{
                                                    fontSize: 23,
                                                    color: "action.active",
                                                    marginRight: "2px",
                                                    marginBottom: "4px",
                                                }}
                                            />
                                            Никнейм
                                        </Box>
                                    }
                                    id="custom-css-outlined-input"
                                    margin="normal"
                                />
                            )}
                        />
                    </Box>

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
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            control={control}
                            name="passwordRepeat"
                            rules={{
                                required: "Обязательно для заполнения",
                                validate: (value) => {
                                    if (
                                        value !==
                                        control._fields.password._f.value
                                    ) {
                                        return "Пароль должен совпадать";
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
                                    error={!!errors.passwordRepeat?.message}
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
                                        {errors.passwordRepeat?.message
                                            ? errors.passwordRepeat?.message
                                            : "Повторите пароль"}
                                    </FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Box>

                    <Box
                        sx={{
                            marginTop: "40px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <ColorButton type="submit" variant="outlined">
                            Зарегистрироваться
                        </ColorButton>
                    </Box>
                </form>
                <Box
                    sx={{
                        height: "100px",
                        marginTop: "10px",
                        marginBottom: "33px",
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
                        Уже есть аккаунт?
                    </Typography>
                    <Link
                        variant="h6"
                        href="#"
                        underline="none"
                        onClick={handleClickShowLogin}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        {"Войдите"}
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};

RegisterForm.propTypes = {
    setShowLogin: PropTypes.func,
};

export default RegisterForm;
