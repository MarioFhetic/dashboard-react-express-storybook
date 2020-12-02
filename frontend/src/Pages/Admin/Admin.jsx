import React, { useEffect } from "react";

import { getPosts } from "../../actions/posts";

import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";

import useStyles from "./styles";

import { useDispatch } from "react-redux"; // hook qui permet de dispatch une action

const Admin = () => {
  const classes = useStyles();
  const dispatch = useDispatch(); // on appel notre hook dans la variable dispatch

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Posts />
      <Form />
    </>
  );
};

export default Admin;
