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
router.post("/talents", authenticateUser, authorizeRoles("organizer"), create);
router.get("/talents", authenticateUser, authorizeRoles("organizer"), index);
router.get("/talents/:id", authenticateUser, authorizeRoles("organizer"), find);
router.put(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);

// export router
module.exports = router;
