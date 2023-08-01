import React, { useState } from "react";
import {
    Card,
    Box,
    CardContent,
    Typography,
    Button,
    styled,
    TextField,
    CardHeader,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import { VisibilityOff, Visibility, Password } from "@mui/icons-material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "api/service/AuthService";
import { Controller, useForm, useFormState } from "react-hook-form";

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

const ChangePasswordForm = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const pswToken = searchParams.get("pswToken");
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = useState(null);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { handleSubmit, control } = useForm({
        defaultValues: {
            password: "",
            passwordRepeat: "",
        },
    });
    const { errors } = useFormState({
        control,
    });

    const onSubmit = async (info) => {
        try {
            const { data } = await AuthService.changePassword(
                pswToken,
                info.password
            );
            return navigate("/login");
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);
        }
    };

    return (
        <Card
            sx={{
                maxWidth: "350px",
                height: "520px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px",
                }}
            >
                <CardHeader
                    sx={{
                        height: "40px",
                        paddingLeft: "5px",
                        marginTop: "7px",
                    }}
                    action={
                        <LockResetRoundedIcon
                            sx={{
                                color: "#00FF00",
                                fontSize: 70,
                            }}
                        />
                    }
                />
            </Box>

            <CardContent sx={{}}>
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
                    Смена пароля
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
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ColorButton type="submit" variant="outlined">
                            Восстановить
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
            </CardContent>
        </Card>
    );
};

ChangePasswordForm.propTypes = {};

export default ChangePasswordForm;
