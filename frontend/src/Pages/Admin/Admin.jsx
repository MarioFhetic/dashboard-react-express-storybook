import React, { useEffect, useState } from "react";

import { getPosts } from "../../actions/posts";

import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";

import useStyles from "./styles";

import { Container, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux"; // hook qui permet de dispatch une action

const Admin = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch(); // on appel notre hook dans la variable dispatch

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container className={classes.container}>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;
