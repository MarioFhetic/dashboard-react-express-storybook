import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";

import GetAppIcon from "@material-ui/icons/GetApp";

import { createPost, updatePost } from "../../actions/posts.js"; // On importe nos actions

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    devoir: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  // la variable post ici cherche dans notre state (avec tt nos data) si currentId existe
  // si il existe on va cherche dans tout les posts le p (post) avec le même current sinon on retourne null
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]); // dans le tableau on dit avec quelle changement la fonciton a l'intérieur du useEffect doit run

  const classes = useStyles();
  const dispatch = useDispatch();

  // quand tu envoi le form tu return postData qui créer un post dans la BDD
  const handleSubmit = (e) => {
    e.preventDefault(); // not to refresh the page in the browser

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      console.log(currentId);
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  // Si il y a un currentId on return le postData du currentId en question

  const clear = () => {
    setCurrentId(null);
    setPostData({
      devoir: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6">
        {currentId ? `Éditer "${post.devoir}"` : "Créer une note"}
      </Typography>
      <TextField
        name="devoir"
        variant="outlined"
        label="Type de devoir"
        fullWidth
        value={postData.devoir}
        onChange={(e) => setPostData({ ...postData, devoir: e.target.value })}
      />
      <TextField
        name="title"
        variant="outlined"
        label="Matière"
        fullWidth
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <TextField
        name="message"
        variant="outlined"
        label="Note sur le devoir"
        fullWidth
        multiline
        rows={4}
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />
      <TextField
        name="tags"
        variant="outlined"
        label="Importance"
        fullWidth
        value={postData.tags}
        onChange={(e) =>
          setPostData({ ...postData, tags: e.target.value.split(",") })
        }
      />
      <div className={classes.fileInput}>
        <Button>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Button>
      </div>
      <Button
        className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
      >
        Envoyer
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={clear}
        fullWidth
      >
        Effacer
      </Button>
    </form>
  );
};

export default Form;
