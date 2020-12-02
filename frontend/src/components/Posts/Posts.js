import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

import useStyles from "./styles";

// Ici on doit fetch nos data depuis le global redux store

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); // state.posts ici vient du reducer

  console.log(posts);

  return (
    <>
      <div>Posts !</div>;
      <Post />
    </>
  );
};

export default Posts;
