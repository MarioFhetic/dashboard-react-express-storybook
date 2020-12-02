// Un reducer est une fonction qui accepte un state et qui accepte une action
// Ensuite basé sur une action.type = create alors on veut retourner soit une action soit un state qui a été changé par une action

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL": // action = FETCH_ALL
      return action.payload; // state = posts
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
