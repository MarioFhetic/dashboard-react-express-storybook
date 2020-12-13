// Ce fichier va regrouper toutes nos fonctions que l'on met habituellement dans routes/posts.js
// Pour des raisons de scalabilité c'est mieux d'executer toutes les focntions ici
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import PostMessage from "../models/postMessage.js";

// PostMessage est le module mongoose que l'on va retourner ici à l'aide d'une fonction asynchrone
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//
export const createPost = async (req, res) => {
  const post = req.body; // req.body contient le json (html) de notre request

  const newPost = new PostMessage(post); // PostMessage est la structure (ou schema que l'on a dans notre model) auquel on lui ajoute le contenu avec post
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// the request est a /posts/:id donc on peut catch l'id pour modifier le post

export const updatePost = async (req, res) => {
  const { id: _id } = req.params; // grace à la destructure on peut changer le nom de id vers _id
  const post = req.body; // envoyer depuis le front
  if (!mongoose.Types.ObjectId.isValid(_id))
    // On verifie si l'id est valide
    return res.status(404).send("Pas de post avec cet id");
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  }); // id puis on precise le post lié à l'id puis on met new = true pour recevoir la version modifié du post
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params; // grace à la destructure on peut changer le nom de id vers _id
  if (!mongoose.Types.ObjectId.isValid(id))
    // On verifie si l'id est valide
    return res.status(404).send("Pas de post avec cet id");

  await PostMessage.findByIdAndRemove(id);
  console.log("DELETE");

  res.json({ message: "post supprimé avec succès" });
};

// 100 Informational
// 200 Success
// 300 Redirection
// 400 Client Error
// 500 Serveur error
