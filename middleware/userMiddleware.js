const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, "../src/data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

let userMiddleware = {
  verificationLogged: (req, res, next) => {
    if (req.cookies.user != null) {
      let userFound = users.find(
        (oneUser) => oneUser.email === req.cookies.user.email
      );
      if (userFound) {
        res.redirect("/home");
      }
    }
    if(req.session.userLogged  != null)
    {
      res.redirect("/home");
    }

    next();
  },
  allAccess: (req, res, next) => {
    if (req.cookies.user != null) {
      res.redirect("/home");
    }
    next();
  },
  redirectProfile: (req, res, next) => {
    if (req.cookies.user != null) {
      res.redirect("/users/profile");
    }

    if(req.session.userLogged  != null)
    {
      res.redirect("/home");
    }
    
    next();
  },
  withUser: (req, res, next) => {
    
    if (req.cookies.user == null || req.cookies.user === undefined) {
      res.redirect("/");
    }

    if(req.session.userLogged == null || req.cookies.userLogged === undefined)
    {
      res.redirect("/");
    }
    next();
  },
};

module.exports = userMiddleware;
