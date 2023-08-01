import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    ListItemButton,
    Rating,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "app/Hooks/Context";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Comment from "UI/Comment";
import { Fade } from "react-reveal";

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

const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty": {
        color: theme.palette.text.primary,
    },
}));

const CommentAdd = (props) => {
    const { user, setUser } = useContext(Context);
    const [value, setValue] = React.useState(0);
    const [addComment, setAddComment] = React.useState(false);
    const [commentText, setCommentText] = React.useState("");
    const [commentAddText, setCommentAddText] = React.useState("");
    const handleAddComment = () => {
        setCommentAddText(commentText);
        setAddComment(true);
        setValue(0);
        setCommentText("");
    };

    return (
        <>
            <Card
                sx={{
                    width: "335px",
                    height: "270px",
                    borderRadius: "15px",
                    bgcolor: "primary.main",
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
                            <StyledRating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            <ListItemButton
                                onClick={handleAddComment}
                                sx={{
                                    borderRadius: "100px",
                                    transition: "none",

                                    flexGrow: 0,
                                }}
                            >
                                <SendRoundedIcon
                                    sx={{
                                        fontSize: 25,
                                        color: "action.active",
                                    }}
                                />
                            </ListItemButton>
                        </Box>

                        <CssTextField
                            fullWidth
                            value={commentText}
                            onChange={(event) =>
                                setCommentText(event.target.value)
                            }
                            helperText={
                                <Typography
                                    sx={{
                                        marginLeft: "-14px",
                                        fontSize: "15px",
                                    }}
                                >
                                    Ваш комментарий
                                </Typography>
                            }
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <ChatBubbleRoundedIcon
                                        sx={{
                                            fontSize: 23,
                                            color: "action.active",
                                            marginRight: "2px",
                                            marginBottom: "-1px",
                                        }}
                                    />
                                    Комментарий
                                </Box>
                            }
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            margin="normal"
                        />
                    </Box>
                </CardContent>
            </Card>
            {addComment ? (
                <Fade>
                    <Comment comment={commentAddText} />
                </Fade>
            ) : null}
        </>
    );
};

CommentAdd.propTypes = {
    age: PropTypes.string,
};

export default CommentAdd;
