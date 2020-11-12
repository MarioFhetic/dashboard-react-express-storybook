import React from "react";

// components
import {
  Cards,
  CountryPicker,
  Chart,
  SideBar,
  NavBar,
  Header,
} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api"; // "./api/index.js"

class App extends React.Component {
  // On va stocker nos données dans le state
  state = {
    data: {},
  };

  // async est obligatoire car c'est une fonction asynchrone
  // componentDidMount car cette méthode run avant de render la page
  async componentDidMount() {
    const fetchedData = await fetchData(); // Notre variable fetchData va contenir la "response" de notre fonction fetchData situé dans le dossier Api
    this.setState({ data: fetchedData });
  }

  render() {
    // On destructure le state pour avoir un code plus propre
    const { data } = this.state; // On le passe en suite dans cards

    return (
      <>
        <NavBar />
        <div className={styles.container}>
          <Header />
          {/* On passe les data en PROPS à notre composant Cards */}
          {/* <CountryPicker /> */}
          <Chart />
          <Cards data={data} />
        </div>
      </>
    );
  }
}
export default App;
