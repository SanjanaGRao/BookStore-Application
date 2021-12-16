/**
 * @file            : user.controller.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
 const logger = require("../../../config/logger");
 const userService = require("../../service/user/user.service");
 const { validationResult } = require("express-validator");
 const dtoObj = require("./user.responseSchema");
 let responseObject;
 
 /**
  * @description Class for user controller
  */
 class UserOperations {
   loginUser = (req, res) => {
     let userDetails = req.body;
     userService.login(userDetails)
       .then((data) => {
         responseObject = dtoObj.userApiSuccess;
         responseObject.message = data;
         res.send(responseObject);
       })
       .catch((err) => {
         logger.error(err);
         responseObject = dtoObj.userApiFailure;
         responseObject.message = err.message;
         return res.send(responseObject);
       });
   };
  
   /**
    * @description to create a new user
    * @param {Object} req 
    * @param {Object} res 
    */
   create = (req, res) => {
     userService.createNewUser(req.body)
       .then((data) => {
         res.send(data);
       })
       .catch((err) => {
         logger.error(err);
         responseObject = dtoObj.userApiFailure;
         responseObject.message = err.message;
         return res.send(responseObject);
       });
   };
  
   /**
    * @description  to retrieve and return all notes from the database.
    * @param {Object} req 
    * @param {Object} res 
    */
   findAll = (req, res) => {
     userService.getUsers()
       .then((users) => {
         res.send(users);
       })
       .catch((err) => {
         logger.error(err);
         responseObject = dtoObj.userApiFailure;
         responseObject.message = err.message;
         return res.send(responseObject);
       });
   };

   /**
    * @description to find a single note with a noteId
    * @param {Object} req 
    * @param {Object} res 
    */
   findOne = (req, res) => {
     userService.getUser(req.params.userId)
       .then((data) => {
         responseObject = dtoObj.userApiSuccess;
         responseObject.message = data;
         res.send(responseObject);
       })
       .catch((err) => {
         if (err.kind === "ObjectId") {
           logger.error("user not found with id");
           responseObject = dtoObj.userApiFindFailure;
           res.send(responseObject);
         }
         responseObject = dtoObj.userApiFailure;
         responseObject.message = err.message;
         res.send(responseObject);
       });
   };
   /**
    * @description to find note and update it with the request body
    * @param {Object} req 
    * @param {Object} res 
    */
   update = (req, res) => {
     let id = req.params.userId;
     let userDetails = req.body;
     userService.updateUsers(id, userDetails)
       .then((result) => {
         res.send(result);
       })
       .catch((err) => {
         if (err.kind === "ObjectId") {
           logger.error("user not found with id");
           responseObject = dtoObj.userApiFindFailure;
           res.send(responseObject);
         }
         responseObject = dtoObj.userApiFailure;
         responseObject.message = err.message;
         res.send(responseObject);
       });
   };
 
    /**
    * @description to delete a note with the specified noteId in the request
    * @param {Object} req 
    * @param {Object} res 
    */
   delete = (req, res) => {
     userService.deleteUsers(req.params.userId)
       .then((result) => {
         res.send({ message: "user deleted successfully!" });
       })
       .catch((err) => {
         if (err.kind === "ObjectId" || err.name === "NotFound") {
           logger.error("user not found with id " + req.params.noteId);
           responseObject = dtoObj.userApiFindFailure;
           res.send(responseObject);
         }
         responseObject = dtoObj.userApiFailure;
         responseObject.message = err.message;
         res.send(responseObject);
       });
   };
   /**
    * @description to send an email if the user forgets the password
    * @param {Object} req 
    * @param {Object} res 
    */
   forgotPassword = (req, res) => {
     let email = req.body.email;
     userService.forgot(email)
       .then((data) => {
         res.send("Result:" + data);
       })
       .catch((err) => {
         logger.error(err);
         console.log("error:" + err);
         res.send(err);
       });
   };
   
   /**
    * @description to reset the user's password
    * @param {Object} req 
    * @param {Object} res 
    */
   resetPassword = (req, res) => {
     let token = req.params.token;
     let password = req.body.password;
     userService.reset(token, password)
       .then((data) => {
         res.json({ message: "Password updated successfully", "Result:": data });
       })
       .catch((err) => {
         logger.error(err);
         console.log("error:" + err);
         res.send(err);
       });
   };
 }
 module.exports = new UserOperations();
 