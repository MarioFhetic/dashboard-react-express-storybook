var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      username: "Nabil",
      welcomeBack:
        "Si tu ne le rends pas tu auras -2 points sur ta moyenne générale !",
      urlIcon: "svg_user.svg",
      alert_info: "N'oublie pas de rendre ton devoir de développement web.",
      alert_success: "Ton DM d'Anglais a bien été envoyé.",
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
