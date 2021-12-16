/**
 * @file            : user.middleware.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
 const { body, validationResult } = require("express-validator");

 /**
  * validation rules set for user details with express validator
  * @returns error messages
  */
 const userValidationRules = () => {
   return [
     body("contactNumber")
       .matches("^(\\d{2}[ ]?)?\\d{10}$")
       .isFullWidth("Please enter a valid mobile number"),
     body("email").exists().isEmail().withMessage("Please enter a valid email"),
     body("password")
       .isLength({ min: 6 })
       .withMessage("Please enter a valid password with at least 6 characters."),
   ];
 };

 /**
  * to print the error messages
  * @param {Object} req
  * @param {Object} res
  * @param {next} next
  * @returns status message with error message
  */
 const validate = (req, res, next) => {
   const errors = validationResult(req);
   if (errors.isEmpty()) {
     return next();
   }
   const extractedErrors = [];
   errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
   return res.status(422).json({ errors: extractedErrors });
 };
 
 module.exports = { userValidationRules, validate };
 