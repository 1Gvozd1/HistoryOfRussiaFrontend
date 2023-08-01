import React from "react";
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

const ActivationCard = () => {
    return (
        <Card
            sx={{
                maxWidth: "350px",
                height: "230px",
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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
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
                        Ссылка отправлена
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            margin: 0,
                            fontSize: 14,
                            visibility: "visible",
                            maxHeight: "150px",
                            WebkitLineClamp: "2",

                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Пожалуйста, проверьте почту и перейдите по ссылке в
                        письме для верификации аккаунта.
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

ActivationCard.propTypes = {};

export default ActivationCard;
