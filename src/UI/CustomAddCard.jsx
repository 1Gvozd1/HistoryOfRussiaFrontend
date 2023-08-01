import React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const CustomAddCard = (props) => {
    let navigate = useNavigate();
    const handleClickNavigateCreate = () => {
        return navigate("/create");
    };

    return (
        <Card
            sx={{
                width: "250px",
                height: "440px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
                ":hover": {
                    cursor: "pointer",

                    boxShadow: "rgb(129,79,10) 0px 0px 0px 3px",
                },
            }}
        >
            <CardActionArea
                sx={{
                    height: "100%",
                }}
                onClick={handleClickNavigateCreate}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <AddOutlinedIcon
                        sx={{
                            fontSize: 60,
                        }}
                    />
                </Box>
            </CardActionArea>
        </Card>
    );
};

CustomAddCard.propTypes = {};

export default CustomAddCard;
