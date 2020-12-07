import * as api from "../api"; // permet de pouvoir utiliser toutes les fonctions du dossier api avec l'alias api

// Créateur d'actions sont des fonctions qui retournent des actions
// Une action est un objet qui contient un type et un payload avec nos data
export const getPosts = () => async (
  dispatch // Ici on fait une fonction asynchrone qui retourne une autre fonction
) => {
  try {
    const { data } = await api.fetchPosts(); // Ici on fetch toutes nos data

    dispatch({ type: "FETCH_ALL", payload: data }); // Ici on envoi nos data dans payload
  } catch (error) {
    console.log(error);
  }

  // const action = {type: 'FETCH_ALL', payload: []} // on stock toutes les data dans payload
  // dispatch(action) // équivalent de return
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); // on veut juste le supprimer pas besoin de response
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
