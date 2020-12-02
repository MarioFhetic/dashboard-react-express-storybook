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
export const createPost = (newPost) => axios.get(urlLocal, newPost); // on lui envoi newPost

// On faire des actions avec Redux que l'on va dispatch
// BoilerPlat code -> on va créer files et folder

// fetch Users

// export const fetchUsers = async () => {
//   try {
//     const { data } = await axios.get(`${urlLocal}/users`);

//     const modifiedData = data.map((userData) => ({
//       id: userData.id,
//       username: userData.username,
//       welcomeBack: userData.welcomeBack,
//       urlIcon: userData.urlIcon,
//       alert_info: userData.alert_info,
//       alert_success: userData.alert_success,
//     }));
//     return modifiedData;
//   } catch (error) {}
// };

// // fetch Charts

// export const fetchCharts = async () => {
//   try {
//     const { data } = await axios.get(`${urlLocal}/charts`);

//     const modifiedData = data.map((dataChart) => ({
//       id: dataChart.id,
//       label: dataChart.label,
//       labels: dataChart.labels,
//       data: dataChart.data,
//       backgroundColor: dataChart.backgroundColor,
//     }));

//     return modifiedData;
//   } catch (error) {}
// };

// // Fetch Meteo

// export const fetchMeteo = async () => {
//   try {
//     const { data } = await axios.get(`${urlMeteo}`);
//     return data;
//   } catch (error) {}
// };
