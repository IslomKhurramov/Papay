let memberController = module.exports;

memberController.home = (req, res) => {
  console.log("GET controller.home");
  res.send("home sahifasidasz");
};

memberController.signup = (req, res) => {
  console.log("POST controller.signup");
  res.send("signup sahifasidasz");
};

memberController.login = (req, res) => {
  console.log("POST controller.login");
  res.send("login sahifasidasz");
};

memberController.logout = (req, res) => {
  console.log("GET constroller.logout");
  res.send("logout sahifasidasz");
};
