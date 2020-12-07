// Un reducer est une fonction qui accepte un state et qui accepte une action
// Ensuite basé sur une action.type = CREATE ou FETCH_ALL alors on veut retourner soit une action soit un state qui a été changé par une action
// /reducers/posts.js check l'action (create, fetch_all etc..) et le state (payload) de /actions/posts.js

export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id != action.payload); // on garde tout les posts sauf ceux ou l'id est égal a action.payload (notre data)
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ); // si post_id est égal au updated post alors tu retourne le nouveau post récemment modifié sinon tu retournes que le post actuel
    case "FETCH_ALL": // action = FETCH_ALL
      return action.payload; // state = posts (correspond au data de la fonction getPosts dans /actions/posts.js)
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
