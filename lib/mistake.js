class Definer {
  //***GENERAL ERRORS */
  static general_err1 = "att: smth went wrong!";
  static general_err2 = "att: there is no data with that parametres!";
  static general_err3 = "att: file upload errror!";

  /**member auth related ********/

  static auth_err1 = "att: mongodb validation is failed";
  static auth_err2 = "att:jwt token creation error";
  static auth_err3 = "att: no member with that mb_nick";
  static auth_err4 = "att: Your credentials does not match";
  static auth_err5 = "att: You are not authenticated";
  /**product related ********/

  static product_err1 = "att: product creation is failed!";

  //orders related error

  static order_err1 = "att: order creation is failed";
  static order_err2 = "att: order item creation is failed";
  static order_err3 = "att: no data with that params exists";

  //articles related error
  static article_err1 = "att: author member for articlesnot provided";
  static article_err2 = "att: no article found with that member";
  static article_err3 = "att: no article found with that target";

  //follow related error
  static follow_err1 = "att: self subscribtion is denied";
  static follow_err2 = "att: new follow subscribtion failed";
  static follow_err3 = "att: no follow data found";
}
module.exports = Definer;
