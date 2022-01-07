const PARTICIPANT_MODEL = require("../models").Participant;
const TANAMPOHON_MODEL = require("../models").Tanam_Pohon;

class ParticipantController {
  // POST New Participant
  static async postNewParticipant(req, res, next) {
    try {
      const { name, no_hp, number_of_trees, tanam_pohon_id } = req.body;

      const dataTanamPohon = await TANAMPOHON_MODEL.findOne({
        where: {
          tanam_pohon_id: Number(tanam_pohon_id),
        },
      });
      // Data Tanam Pohon Ada?
      if (dataTanamPohon) {
        // Data Body Kosong?
        if (!name || !no_hp || !number_of_trees) {
          next({
            code: 400,
            message: "'name', 'no_hp', 'number_of_trees' can't be empty",
          });
        } else {
          const newParticipant = await PARTICIPANT_MODEL.create({
            name,
            no_hp,
            number_of_trees,
            user_id: req.userAccount.user_id,
            tanam_pohon_id,
          });

          res.status(200).json({
            message: "Success Register Tanam Pohon!",
            participant: {
              participant_id: newParticipant.participant_id,
              name,
              no_hp,
              number_of_trees,
              user_id: req.userAccount.user_id,
              tanam_pohon_id,
            },
          });
        }
      } else {
        next({
          code: 404,
          message: `Data Tanam Pohon Id ${tanam_pohon_id} Not Found`,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // GET All Participants
  static async getAllParticipants(req, res) {
    try {
      const dataParticipant = await PARTICIPANT_MODEL.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

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
        attributes: {
          exclude: ["createdAt", "updatedAt"],
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
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
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
