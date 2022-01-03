const PARTICIPANT_MODEL = require("../models").Participant;

class ParticipantController {
  // POST New Participant
  static postNewParticipant(req, res) {
    try {
      const newParticipant = {
        name: req.body.name,
        no_hp: req.body.no_hp,
        number_of_trees: req.body.number_of_trees,
        user_id: req.userAccount.user_id,
        tanam_pohon_id: req.body.tanam_pohon_id,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      PARTICIPANT_MODEL.create(newParticipant)
        .then((result) => {
          res.status(200).json({
            message: "Success post new Participant!",
            result,
          });
        })
        .catch((err) => res.status(401).json({ message: err }));
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Participants
  static async getAllParticipants(req, res) {
    try {
      const dataParticipant = await PARTICIPANT_MODEL.findAll();

      if (dataParticipant.length != 0) {
        res.status(200).send({
          message: "Success Get All Participants",
          participants: dataParticipant,
        });
      } else {
        res.status(404).send({
          message: "Data Participants is Empty",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET Participant by Id
  static async getParticipantById(req, res) {
    try {
      const participantID = req.params.id;

      const dataParticipant = await PARTICIPANT_MODEL.findOne({
        where: {
          Participant_id: Number(participantID),
        },
      });

      if (dataParticipant) {
        res.status(200).send({
          message: `Success Get Participant where Participant Id is ${participantID}`,
          participants: dataParticipant,
        });
      } else {
        res.status(404).send({
          message: `Data Participant where Participant Id is ${participantID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Participant by Tanam Pohon Id
  static async getParticipantByTanamPohonId(req, res) {
    try {
      const tanam_pohon_id = req.params.id;

      const dataParticipant = await PARTICIPANT_MODEL.findAll({
        where: {
          tanam_pohon_id: tanam_pohon_id,
        },
      });

      console.log(dataParticipant);
      if (dataParticipant.length !== 0) {
        res.status(200).send({
          message: `Success Get Participant where Tanam Pohon Id is ${tanam_pohon_id}`,
          Participants: dataParticipant,
        });
      } else {
        res.status(404).send({
          message: `Data Participants where Tanam Pohon Id is ${tanam_pohon_id} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }
}

module.exports = ParticipantController;
