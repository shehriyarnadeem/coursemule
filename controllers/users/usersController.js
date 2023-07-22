/**
 * Authors: Shehriyar Nadeem
 * Description: Controller for Courses
 */

exports.getUser = async (req, res) => {
  const user = {...req.user, isAuthenticated:req.isAuthenticated()};
  res.status(200).send({message:"Logged In", data: user})
}

exports.logOut = async (req,res) => {
  req.logout(function(err) {
    if (err) { return next(err)}
    const user = {isAuthenticated:req.isAuthenticated()};
    res.status(200).send({message:"Logged out", data: user})
  });
}   