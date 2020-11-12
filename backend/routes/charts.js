var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      username: "radarChart",
      labels: ["Sport", "Révision", "Lecture", "Playstation"],
      data: ["50", "10", "30", "60"],
      backgroundColor: [
        "rgba(1, 113, 121, 0.2);",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
    },
  ]);
});

module.exports = router;
