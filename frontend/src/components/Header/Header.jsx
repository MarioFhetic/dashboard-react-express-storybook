import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import styles from "./Header.module.css";

import Alert from "@material-ui/lab/Alert";

// api fetch
import { fetchUsers, fetchMeteo } from "../../api";

const Header = () => {
  const [userData, setUserData] = useState([]);
  const [meteo, setMeteo] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setUserData(await fetchUsers());
    };

    fetchAPI(); // on appel la fonction pour l'activer
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      setMeteo(await fetchMeteo());
    };

    fetchAPI(); // on appel la fonction pour l'activer
  }, []);

  return (
    <header>
      <div className={styles.containerHeader}>
        <h1>Dashboard</h1>
        <span></span>
      </div>
      {userData.length
        ? userData.map((item, i) => {
            return (
              <div key={i} className={styles.welcomeBack}>
                <div className={styles.contentText}>
                  <h3>Bienvenue {item.username} !</h3>
                  {item.alert_info && item.alert_success ? (
                    <Alert severity="info">{item.alert_info}</Alert>
                  ) : null}
                  <Alert style={{ marginTop: "1rem" }} severity="success">
                    {item.alert_success}
                  </Alert>
                </div>
                <div className={styles.contentImg}>
                  <img src={item.urlIcon} alt={`Photo de ${item.username}`} />
                </div>
              </div>
            );
          })
        : null}
    </header>
  );
};

export default Header;
