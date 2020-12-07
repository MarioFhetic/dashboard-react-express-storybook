import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlLocal = "http://localhost:5000/posts";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }, // On destructe data pour que ça reste propre
    } = await axios.get(url);

    const modifiedData = {
      confirmed, // pareil que =>  confirmed: confirmed
      recovered, // pareil que =>  recovered: recovered
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchPosts = () => axios.get(urlLocal);
export const createPost = (newPost) => axios.post(urlLocal, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${urlLocal}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlLocal}/${id}`);

// On faire des actions avec Redux que l'on va dispatch
// BoilerPlat code -> on va créer files et folder
