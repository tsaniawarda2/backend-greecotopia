const express = require("express");
const router = express.Router();

const ClaimRewardController = require("../controllers/claimreward.controller");
const authentication = require("../middleware/authentication");

// Authentication
router.use(authentication);
router.post("/", ClaimRewardController.postNewClaimReward);
router.get("/user/:id", ClaimRewardController.getClaimRewardsByUserId);

module.exports = router;