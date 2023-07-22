const crypto = require('crypto');

exports.encodeFileName = file =>{
       let orignalName = file.name.split('.');
       orignalName[0] = orignalName[0] + generateUniqueHash()
       return  orignalName.join('.');
 }

 function generateUniqueHash() {
  // Generate a random UUID
  const uniqueId = crypto.randomBytes(16).toString('hex');
  
  // Generate the SHA-256 hash of the UUID
  const hash = crypto.createHash('sha256');
  hash.update(uniqueId);
  const hashString = hash.digest('hex');
  
  return hashString;
}

exports.checkAuthenticatedUser = () => {
  return (req, res, next) => {
    if(req.session && req.session?.passport){
    // Call next() to pass control to the next middleware or route handler
    next();
    }else {
      return res.status(401).json({isAuthenticated:req.isAuthenticated(), error:{message:"Unauthorized"}})
    } 
  };
}