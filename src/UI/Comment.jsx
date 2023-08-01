import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Rating,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "app/Hooks/Context";

const Comment = ({ comment }) => {
    const { user, setUser } = useContext(Context);

    return (
        <Card
            sx={{
                minWidth: "300px",
                minHeight: "265px",
                borderRadius: "15px",
                bgcolor: "primary.main",
                boxShadow: "rgb(129,79,10) 0px 0px 0px 3px",
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        mb: "20px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: "15px",
                            mt: "20px",
                        }}
                    >
                        <Chip
                            sx={{
                                mr: "10px",
                            }}
                            avatar={<Avatar alt="Natacha">U</Avatar>}
                            label="USER"
                            variant="outlined"
                        />
                        <Rating name="read-only" value={5} readOnly />
                    </Box>

                    <Typography
                        paragraph={false}
                        sx={{
                            fontSize: 18,
                            fontStyle: "italic",
                            mb: "10px",
                            width: "300px",
                        }}
                    >
                        {comment}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

Comment.propTypes = {
    age: PropTypes.string,
    comment: PropTypes.string,
};

export default Comment;
