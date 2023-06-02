const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
//memberga dahldor routerlar
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

/*********************************************************
 *    REST API    -React un kerak bulgan router hisoblanadi *
 *********************************************************/

//

//boshqa routerlar
router.get("/menu", (req, res) => {
  res.send("Menu sahifasidasz");
});

router.get("/community", (req, res) => {
  res.send("Jamiyat sahifasidasz");
});

module.exports = router;
