const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, "../src/data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

let userMiddleware = {
  verificationLogged: (req, res, next) => {
    if (req.cookies.user != undefined) {
      let userFound = users.find(
        (oneUser) => oneUser.email === req.cookies.user.email
      );
      if (userFound) {
        return res.redirect("/home");
      }
    }
    if(req.session.userLogged  != undefined)
    {
      return  res.redirect("/home");
    }

    next();
  },
  allAccess: (req, res, next) => {
      next();
  },
  redirectProfile: (req, res, next) => {
    if (req.cookies.user != undefined) {
      return res.redirect("/users/profile");
    }

    if(req.session.userLogged != undefined)
    {
      return res.redirect("/home");
    }
    
    next();
  },
  withUser: (req, res, next) => {
    console.log(req.session.userLogged)
    if(req.session.userLogged !== undefined || req.cookies.user !== undefined)
    {
      next();
    }
    else if (req.session.userLogged === undefined && req.cookies.user === undefined) {
        return res.redirect("/");
    }
  },
};

module.exports = userMiddleware;
