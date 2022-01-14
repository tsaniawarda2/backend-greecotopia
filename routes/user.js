const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.get("/", UserController.getAllUser);
router.get("/topTen", UserController.getTopTen);
router.get("/topFive", UserController.getTopFive);
router.get("/topThree", UserController.getTopThree);
router.get("/:id", UserController.getUserbyId);

// Authentication
router.use(authentication);
// Authorization
router.use("/:id", authorization);
router.put("/:id", UserController.updateUserById);
router.patch("/resetPoint/role/:role_id", UserController.updatedPoints);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
