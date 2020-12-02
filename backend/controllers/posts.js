// Ce fichier va regrouper toutes nos fonctions que l'on met habituellement dans routes/posts.js
// Pour des raisons de scalabilité c'est mieux d'executer toutes les focntions ici

import PostMessage from "../models/postMessage.js";

// PostMessage est le module mongoose que l'on va retourner ici à l'aide d'une fonction asynchrone
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(PostMessage);
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

// 100 Informational
// 200 Success
// 300 Redirection
// 400 Client Error
// 500 Serveur error
