// import router from express
const express = require("express");
const router = express();

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// import product controller
const { create, index, find, update, destroy } = require("./controller");

//connect router endpoint with create method
router.post(
  "/events",
  authenticateUser,
  authorizeRoles("organizer", "admin"),
  create
);
router.get(
  "/events",
  authenticateUser,
  authorizeRoles("organizer", "admin"),
  index
);
router.get(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer", "admin"),
  find
);
router.put(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer", "admin"),
  update
);
router.delete(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer", "admin"),
  destroy
);

// export router
module.exports = router;
