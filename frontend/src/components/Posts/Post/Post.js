import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";

import { useDispatch } from "react-redux";

// et on importe notre action
import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography style={{ color: "white" }} variant="h6">
            {post.devoir}
          </Typography>
          <Typography style={{ color: "white" }} variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "#017179" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography
            className={classes.detailsItem}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography
            style={{
              color: "rgba(1, 113, 121, 0.5)",
              letterSpacing: "inherit",
            }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            style={{ color: "#017179" }}
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon style={{ color: "#017179" }} fontSize="small" />{" "}
            Supprimer la note
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
