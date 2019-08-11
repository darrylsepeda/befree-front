const routes = require("next-routes");

module.exports = routes()
  .add("auth/signin")
  .add("auth/signup")
  .add("ads")
  .add("user", "/user/:id", "profile");
