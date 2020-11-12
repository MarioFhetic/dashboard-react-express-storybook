import React, { useState, useEffect } from "react";

import { fetchUsers, fetchCharts } from "../../api";

import styles from "./SideBar.module.css";
import cx from "classnames";

// Material
import { Drawer } from "@material-ui/core";

const SideBar = () => {
  // get data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsersLocal = async () => {
      setUsers(await fetchUsers());
    };
    fetchUsersLocal();
  }, []);

  return (
    <Drawer variant="permanent" anchor="left">
      <h1>Nabil</h1>
    </Drawer>
  );
};

export default SideBar;
