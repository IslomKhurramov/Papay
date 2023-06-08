const path = require("path"); //nodejs bn birga keladigan core package
const multer = require("multer");
const uuid = require("uuid");

/**MULTI IMAGE UPLOADER */
function getTargetImageStorage(address) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      //request kelyapdi fileni olyabdi va callback bulyapdi
      cb(null, `./uploads/${address}`); // rasmlarni addressni ichiga yuklash
    },
    filename: function (req, file, cb) {
      //request kelyapdi fileni olyabdi va callback bulyapdi
      const extension = path.parse(file.originalname).ext; //path degan packagedan parse methodni kiritib file nomini kiritib ext qismi jpegni oberadi
      const random_name = uuid.v4() + extension;
      cb(null, random_name);
    },
  });
}

const makeUploader = (address) => {
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage });
};

module.exports = makeUploader;

// const product_storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/products");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const extension = path.parse(file.originalname).ext;
//     const random_name = uuid.v4() + extension;
//     cb(null, random_name);
//   },
// });
// module.exports.uploadProductImage = multer({ storage: product_storage });
