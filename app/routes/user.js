// const auth = require("../middleware/auth");

// Permission levels:
// public
// user
// admin

module.exports = (app) => {
  const users = require("../controllers/user");

  const router = require("express").Router();

  // Get a single user
  router.get("/:id", users.findOne);

  // Get all users
  router.get("/", users.findAll);

  // Register a new user
  router.post("/register", users.register);

  // Login user
  router.post("/login", users.login);

  // Update user info
  router.put("/:id", users.update);

  // Delete user
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};
