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
} from "@mui/material";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useForm, useFormState, Controller } from "react-hook-form";
import AuthService from "api/service/AuthService";
import { useNavigate } from "react-router-dom";

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

const RecoverPasswordForm = () => {
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            login: "",
        },
    });
    const { errors } = useFormState({
        control,
    });

    const onSubmit = async (info) => {
        try {
            const { data } = await AuthService.recovery(info.login);
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
                maxWidth: "400px",
                height: "430px",
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
                        <ForwardToInboxOutlinedIcon
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
                    Восстановление пароля
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
                    Пожалуйста, введите почту, чтобы восстановить пароль.
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
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "center",
                            minWidth: "370px",
                        }}
                    >
                        <ColorButton type="submit" variant="outlined">
                            Отправить письмо
                        </ColorButton>
                    </Box>
                </form>
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
            </CardContent>
        </Card>
    );
};

RecoverPasswordForm.propTypes = {};

export default RecoverPasswordForm;
