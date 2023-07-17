const mongoose = require("mongoose");

exports.memeber_type_enums = ["USER", "ADMIN", "PEDAL", "RESTAURANT"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED", "RESTAURANT"];
exports.ordernary_enums = ["Y", "N"];

exports.product_collection_enums = ["dish", "salad", "dessert", "etc"];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enums = ["small", "normal", "large", "set"];
exports.product_volume_enums = [0.5, 1, 1.2, 1.5, 2];

exports.like_view_group_list = ["product", "member", "community"];
exports.board_id_enum = ["celebrity", "evaluation", "story"];
/**MONGODB related commands */
/************************* */

exports.shapeIntoMongosObjectId = (target) => {
  if (typeof target === "string") {
    return new mongoose.Types.ObjectId(target);
  } else return target;
};
