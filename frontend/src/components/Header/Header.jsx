import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import styles from "./Header.module.css";

import Alert from "@material-ui/lab/Alert";

// api fetch
// import { fetchUsers, fetchMeteo } from "../../api";

const Header = () => {
  // const [userData, setUserData] = useState([]);
  // const [meteo, setMeteo] = useState({});

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setUserData(await fetchUsers());
  //   };

  //   fetchAPI(); // on appel la fonction pour l'activer
  // }, []);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setMeteo(await fetchMeteo());
  //   };

  //   fetchAPI(); // on appel la fonction pour l'activer
  // }, []);

  return (
    <header>
      <div className={styles.containerHeader}>
        <h1>Dashboard</h1>
        <span></span>
      </div>
      <div className={styles.welcomeBack}>
        <div className={styles.contentText}>
          <h3>Bienvenue Nabil !</h3>
          <Alert severity="info">
            N'oublie pas de rendre ton devoir de développement web.
          </Alert>
          <Alert style={{ marginTop: "1rem" }} severity="success">
            Ton DM d'Anglais a bien été envoyé.{" "}
          </Alert>
        </div>
        <div className={styles.contentImg}>
          {/* <img src={item.urlIcon} alt={`Photo de Nail`} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
