const express = require("express");
const router = express.Router();

const ParticipantController = require("../controllers/participant.controller");
const authentication = require("../middleware/authentication");

router.get("/", ParticipantController.getAllParticipants);
router.get(
  "/tanam_pohon/:id",
  ParticipantController.getParticipantByTanamPohonId
);
router.get("/:id", ParticipantController.getParticipantById);

// Authentication
router.use(authentication);
router.post("/", ParticipantController.postNewParticipant);

module.exports = router;
