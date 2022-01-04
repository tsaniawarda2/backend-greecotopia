// Import Modules
const express = require("express");
const router = express.Router();

// Router
const userRoutes = require("./user");
const authRoutes = require("./auth");

const tanamPohonRoutes = require("./tanampohon");
const participantRoutes = require("./participant");
const documentationRoutes = require("./documentation");

// Check ping
router.get("/ping", (req, res) => {
  res.status(200).send({
    message: "Success! Server is Ready",
  });
});

// Welcome Page
router.get("/", (req, res) => {
  res.send(`<h1>Hello Welcome to Greecotopia API!</h1>
            <p>You only can access endpoint GET Issues, Tags, Forums, and Comments because you needs to login to access other endpoint</p>
            <p>This the path: </p>
            <li>GET All Issues <a href="https://pure-thicket-57785.herokuapp.com/forums">https://pure-thicket-57785.herokuapp.com/issues</a></li>
            <li>GET All Forums <a href="https://pure-thicket-57785.herokuapp.com/forums">https://pure-thicket-57785.herokuapp.com/forums</a></li>
            <li>GET All Tags <a href="https://pure-thicket-57785.herokuapp.com/forums">https://pure-thicket-57785.herokuapp.com/tags</a></li>
            <li>GET All Comments <a href="https://pure-thicket-57785.herokuapp.com/forums">https://pure-thicket-57785.herokuapp.com/comments</a></li>
            <p> You can also get data by id for endpoints Issues, Tags, Forums, and Comments, example path : </p>
            <li>GET Issues by Id (Id = 1)  <a href="https://pure-thicket-57785.herokuapp.com/forums/1">https://pure-thicket-57785.herokuapp.com/issues/1</a></li>
            `);
});

// Path Auth
router.use("/auth", authRoutes);
// Path User
router.use("/users", userRoutes);
//Path Tanam Pohon
router.use("/tanampohons", tanamPohonRoutes);
//Path Participant
router.use("/participants", participantRoutes);
// Path Documentations
router.use("/documentations", documentationRoutes);

module.exports = router;
