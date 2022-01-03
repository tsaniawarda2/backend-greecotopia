const express = require("express");
const router = express.Router();

const TanamPohonController = require("../controllers/tanampohon.controller");

router.get("/", TanamPohonController.getAllTanamPohons);
router.get("/:id", TanamPohonController.getTanamPohonbyId);

module.exports = router;
