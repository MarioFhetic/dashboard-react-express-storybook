import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlLocal = "http://localhost:3001";
const urlMeteo =
  "http://api.openweathermap.org/data/2.5/weather?q=paris&appid=5a0d8850b602836aa970b70b8fb5388b&units=metric";

//api key 5a0d8850b602836aa970b70b8fb5388b

// async permet d'utiliser wait, promise, catch mais bcp + facile à lire et écrire

// export const fetchData = async () => {
//   try {
//     const response = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

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

    {
      console.log(modifiedData);
    }

    return modifiedData;
  } catch (error) {}
};

// fetch Users

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(`${urlLocal}/users`);

    const modifiedData = data.map((userData) => ({
      id: userData.id,
      username: userData.username,
      welcomeBack: userData.welcomeBack,
      urlIcon: userData.urlIcon,
      alert_info: userData.alert_info,
      alert_success: userData.alert_success,
    }));
    return modifiedData;
  } catch (error) {}
};

// fetch Charts

export const fetchCharts = async () => {
  try {
    const { data } = await axios.get(`${urlLocal}/charts`);

    const modifiedData = data.map((dataChart) => ({
      id: dataChart.id,
      label: dataChart.label,
      labels: dataChart.labels,
      data: dataChart.data,
      backgroundColor: dataChart.backgroundColor,
    }));

    {
      console.log("ouho", modifiedData.data);
    }

    return modifiedData;
  } catch (error) {}
};

// Fetch Meteo

export const fetchMeteo = async () => {
  try {
    const { data } = await axios.get(`${urlMeteo}`);
    return data;
  } catch (error) {}
};
