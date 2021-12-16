/**
 * @file            : user.service.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
const userModels = require("../../model/user/user.model");
const jwtHelper = require("../../../utils/jwt");
const emailer = require("../../../utils/nodeMailer");
const bcrypt = require("bcrypt");

class UserService {
  /**
   * @description Service layer function for user registeration
   * @param {Object} userDetails
   */
  createNewUser = (userDetails) => {
    return userModels.createUser(userDetails);
  };

  /**
   * @description Service layer function for user login
   * @param {Object} userDetails
   */
  login = (userDetails) => {
    return userModels
      .loginUser(userDetails)
      .then((data) => {
        if (bcrypt.compareSync(userDetails.password, data.password)) {
          var token = jwtHelper.generateToken(data._id);
          return token;
        } else {
          throw new Error("Password is incorrect");
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  /**
   * @description Service layer function for finding all user
   */
  getUsers = () => {
    return userModels.findAllUsers();
  };

  /**
   * @description Service layer function for finding particular user using email
   * @param {string} findId
   */
  getUser = (findId) => {
    return userModels.findUser(findId);
  };

  /**
   *@description Service layer function for updating user details
   * @param {Object} findId
   * @param {Object} userDetails
   */
  updateUsers = (findId, userDetails) => {
    return userModels.updateUser(findId, userDetails);
  };

  /**
   *@description Service layer function for deleting a user
   * @param {Object} findId
   */
  deleteUsers = (findId) => {
    return userModels.deleteById(findId);
  };

  /**
   * @description Service layer function for user forgot password
   * @param {string} email
   * @returns
   */
  forgot = (email) => {
    return userModels
      .forgotPassword(email)
      .then((data) => {
        return emailer
          .mailer(data.email, data.resetPasswordToken)
          .then((data) => {
            return data;
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @description Service layer function for user reset password
   * @param {string} token
   * @param {string} password
   * @returns
   */
  reset = (token, password) => {
    return userModels
      .resetPassword(token, password)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  };
}
module.exports = new UserService();
