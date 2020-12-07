import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    height: "100%",
    position: "relative",
    borderBottom: "10px solid rgba(1, 113, 121, 0.5)",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    color: "rgba(1, 113, 121, 0.7)",
    fontWeight: "700",
  },
  cardActions: {
    padding: "20px",
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "center",
  },
  detailsItem: {
    padding: "10px 25px",
    backgroundColor: "rgba(1, 113, 121, 0.2)",
    color: "rgba(1, 113, 121, 0.7)",
    borderRadius: "7px",
    textTransform: "uppercase",
    fontWeight: "500",
  },
});
