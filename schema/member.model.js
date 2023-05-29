const mongoose = require("mongoose");
const { memeber_type_enums, member_status_enums } = require("../lib/config");

const memberSchema = new mongoose.Schema(
  {
    mb_nick: {
      type: String,
      required: true,
      index: { unique: true, sparse: true },
    },
    mb_phone: {
      type: String,
      required: true,
    },
    mb_password: {
      type: String,
      required: true,
      Select: false,
    },
    mb_type: {
      type: String,
      reuqired: true,
      default: "USER",
      enum: {
        values: memeber_type_enums,
        message: "{VALUE} is not among permitted value",
      },
    },
    mb_status: {
      type: String,
      reuqired: false,
      default: "ACTIVE",
      enum: {
        values: member_status_enums,
        message: "{VALUE} is not among permitted value",
      },
    },
    mb_full_name: {
      type: String,
      required: false,
    },
    mb_address: {
      type: String,
      required: false,
    },
    mb_description: {
      type: String,
      required: false,
    },
    mb_image: {
      type: String,
      reuqired: false,
    },
    mb_point: {
      type: String,
      reuqired: false,
      default: 0,
    },
    mb_top: {
      type: String,
      required: false,
      default: "N",
      enum: {
        values: ordirary_enums,
        message: "{VALUE} is not among permitted value",
      },
    },
    mb_views: {
      type: Number,
      required: false,
      default: 0,
    },

    mb_likes: {
      type: Number,
      required: false,
      default: 0,
    },

    mb_follow_cnt: {
      type: Number,
      required: false,
      default: 0,
    },

    mb_subscriber_cnt: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true } //createdAt va UpdatedAt ni qoyib beradi
);

module.exports = mongoose.module("Member", memberSchema);
