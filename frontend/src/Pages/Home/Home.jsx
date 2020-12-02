import React from "react";
import { Cards, Chart, Header } from "../../components";
import styles from "../../App.module.css";
import { fetchData } from "../../api"; // "./api/index.js"

class Home extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData(); // Notre variable fetchData va contenir la "response" de notre fonction fetchData situé dans le dossier Api
    this.setState({ data: fetchedData });
  }

  render() {
    // On destructure le state pour avoir un code plus propre
    const { data } = this.state; // On le passe en suite dans cards

    return (
      <>
        <div className={styles.container}>
          <Header />
          <Chart />
          <Cards data={data} />
        </div>
      </>
    );
  }
}

export default Home;
