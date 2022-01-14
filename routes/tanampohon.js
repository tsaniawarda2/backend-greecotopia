const express = require("express");
const router = express.Router();

const TanamPohonController = require("../controllers/tanampohon.controller");
const authorization = require("../middleware/authorization");

router.post("/", authorization, TanamPohonController.postNewTanamPohon);
router.get("/", TanamPohonController.getAllTanamPohons);
router.get("/:id", TanamPohonController.getTanamPohonbyId);

module.exports = router;
