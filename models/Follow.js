const assert = require("assert");
const { shapeIntoMongosObjectId } = require("../lib/config");
const FollowModel = require("../schema/follow.model");
const MemberModel = require("../schema/member.model");

const Definer = require("../lib/mistake");

class Follow {
  constructor() {
    this.followModel = FollowModel;
    this.memberModel = MemberModel;
  }

  async subscribeData(member, data) {
    try {
      assert.ok(member._id !== data.mb_id, Definer.follow_err1);

      const subscriber_id = shapeIntoMongosObjectId(member._id);
      const follow_id = shapeIntoMongosObjectId(data.mb_id);

      const member_data = await this.memberModel
        .findById({
          _id: follow_id,
        })
        .exec();
      assert.ok(member_data, Definer.general_err2);

      const result = await this.createSubscribtionData(
        follow_id,
        subscriber_id
      );
      assert.ok(result, Definer.general_err1);

      await this.modifyMemberFollowCount(follow_id, "subscriber_change", 1);
      await this.modifyMemberFollowCount(subscriber_id, "follow_change", 1);
      return true;
    } catch (err) {
      throw err;
    }
  }

  async createSubscribtionData(follow_id, subscriber_id) {
    try {
      const new_follow = new this.followModel({
        follow_id: follow_id,
        subscriber_id: subscriber_id,
      });
      return await new_follow.save();
    } catch (mongo_err) {
      throw new Error(Definer.follow_err2);
    }
  }

  async modifyMemberFollowCount(mb_id, type, modifier) {
    try {
      if (type === "follow_change") {
        await this.memberModel
          .findByIdAndUpdate(
            { _id: mb_id },
            { $inc: { mb_follow_cnt: modifier } }
          )
          .exec();
      } else if (type === "subscriber_change") {
        await this.memberModel
          .findByIdAndUpdate(
            { _id: mb_id },
            { $inc: { mb_subscriber_cnt: modifier } }
          )
          .exec();
      }
      return true;
    } catch (err) {
      throw err;
    }
  }

  async unsubscribeData(member, data) {
    try {
      const subscriber_id = shapeIntoMongosObjectId(member._id);
      const follow_id = shapeIntoMongosObjectId(data.mb_id);

      const result = await this.followModel.findOneAndDelete({
        follow_id: follow_id,
        subscriber_id: subscriber_id,
      });
      assert.ok(result, Definer.general_err1);

      await this.modifyMemberFollowCount(follow_id, "subscriber_change", -1);
      await this.modifyMemberFollowCount(subscriber_id, "follow_change", -1);

      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Follow;
