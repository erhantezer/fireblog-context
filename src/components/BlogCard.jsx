import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.png";
import moment from "moment";
import { useAuth } from "../contexts/AuthContextProvider";
import { toastErrorNotify } from "../helpers/toastify";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  module: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",
  },
  image: {
    padding: 3,
  },
  avatar: {
    marginBottom: "0.35em",
  },
  cardContent: {
    backgroundColor: "#efeefe",
    height: "125px",
  },
  title: {
    fontFamily: "Girassol",
    color: "#046582",
  },
});

export default function BlogCard({ post }) {
  
  const [like, setLike] = useState(0)
  const {
    id,
    author,
    content,
    get_comment_count,
    // get_like_count,
    image,
    published_date,
    title,
  } = post;
  const classes = useStyles();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
const countToggle = () => {
  if(like > 0) {
    setLike(like - 1)
  }else {
    setLike(like + 1)
  }
}
 
  const openDetails = () => {
    if (!currentUser) {
      toastErrorNotify("Login for detials of blog!");
    }
    navigate(`/detail/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openDetails}>
        <CardMedia
          className={classes.media}
          image={image || placeholder}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(published_date).format("MMM DD, YYYY")}
          </Typography>
          <p className={classes.module}>{content}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircle className={classes.avatar} />
        <Typography gutterBottom variant="h6" component="h2">
          {author}
        </Typography>
      </CardActions>
      <CardActions>
        <IconButton aria-label="add to favorites" className={classes.image} onClick={countToggle}>
          <FavoriteIcon color={like> 0 ? "error" : "disabled"} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" >
          {like} {like > 1 ? "Likes" : "Like"}
        </Typography>
        <IconButton aria-label="comment count" className={classes.image}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_comment_count}
        </Typography>
      </CardActions>
    </Card>
  );
}
