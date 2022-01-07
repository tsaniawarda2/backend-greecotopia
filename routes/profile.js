const express = require("express");
const router = express.Router();

const ProfileController = require("../controllers/profile.controller");
const authentication = require("../middleware/authentication");

// Authentication
router.use(authentication);
router.get("/", ProfileController.getProfile);
router.put("/", ProfileController.updateProfile);
router.delete("/", ProfileController.deleteAccount);

module.exports = router;
