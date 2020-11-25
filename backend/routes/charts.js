var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      username: "radarChart",
      label: "Total heure par matière",
      labels: [
        "Technologie web",
        "Bootcamp",
        "UX Design",
        "Anglais",
        "Urbanisation SI",
        "IOT",
      ],
      data: [90, 40, 70, 60, 50, 80],
      backgroundColor: [
        "rgba(1, 113, 121, 0.2);",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 19, 135, 0.2)",
        "rgba(150, 148, 35, 0.2)",
      ],
    },
  ]);
});

module.exports = router;
