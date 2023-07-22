/* Authors: Shehiyar Nadeem
* Description: Exra utility functions.
*/

/**
* Uses the validate module to validate an object based on the given schema.
*
* @param schema - expected structure of object
* @param obj - object to validate
* @param res - HTTP response
* @returns boolean
*/
exports.validateObject = (schema, obj, res) => {
 // Validate object
 const errors = schema.validate(obj, { strip: false });
 if (errors.length > 0) {
   res.status(400).send({ message: errors[0].message });
   return false;
 }
 // Object validated
 return true;
};