const express = require("express");
const router = express.Router();

const DocumentationController = require("../controllers/documentation.controller");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.get("/", DocumentationController.getAllDocumentation);
router.get("/:id", DocumentationController.getDocumentationById);

// Authentication
router.use(authentication);
router.post("/", DocumentationController.createNewDocumentation);

module.exports = router;
