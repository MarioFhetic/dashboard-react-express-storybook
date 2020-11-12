var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      username: "Nabil",
      welcomeBack:
        "N'oublie pas de rendre ton devoir de développement Web, il ne te reste plus que 2 jours. Si tu ne le rends pas tu auras -2 points sur ta moyenne générale !",
      urlIcon: "logoece.png",
      courses: {
        english: {
          name: "English",
          description: "",
        },
      },
    },
  ]);
});

module.exports = router;
