let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("GET: cont/getAllProducts");
  } catch (err) {
    console.log("ERROR, cont/getAllProducts", err.message);
    res.json({ state: "fail", message: err.message });
  }
};

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");
    //TODO: product creation develop
    res.send("ok");
  } catch (err) {
    console.log("ERROR, cont/addNewProduct", err.message);
  }
};

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
  } catch (err) {
    console.log("ERROR, cont/updateChosenProduct", err.message);
    res.json({ state: "fail", message: err.message });
  }
};
