const TANAMPOHON_MODEL = require("../models").Tanam_Pohon;
const Participant = require("../models").Participant
const { Op } = require("sequelize")

class TanamPohonController {
  // POST New TanamPohon
  static postNewTanamPohon(req, res) {
    try {
      const newTanamPohon = {
        title: req.body.title,
        image_url: req.body.image_url,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        reward_point: req.body.reward_point,
        due_date: req.body.due_date
      };
      TANAMPOHON_MODEL.create(newTanamPohon)
        .then((result) => {
          res.status(200).json({
            message: "Success post new tanam pohon!",
            result,
          });
        })
        .catch((err) => res.status(400).json({ message: err }));
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Tanam Pohon
  static async getAllTanamPohons(req, res) {
    try {
      const dataTanamPohon = await TANAMPOHON_MODEL.findAll({
        // include: {
        //   model: Participant,
        //   attributes: ['user_id']
        // }
      });

      if (dataTanamPohon.length != 0) {
        const tanamPohonIds = dataTanamPohon.map(tanamPohon => tanamPohon.dataValues.tanam_pohon_id) 
        const dataParticipant = await Participant.findAll({
          where: {
            tanam_pohon_id: {
              [Op.in] : tanamPohonIds
            }
          }
        })

        const result = dataTanamPohon.map(tanamPohon => {
          const temp = {
            ...tanamPohon.dataValues,
            Participants : dataParticipant.filter(participant => {
              return participant.dataValues.tanam_pohon_id == tanamPohon.dataValues.tanam_pohon_id
            })
          }
          return temp
        })
        res.status(200).send({
          message: "Success Get All Tanam Pohon",
          TanamPohon: result,
          // dataParticipant
        });
      } else {
        res.status(404).send({
          message: "Data Tanam Pohon is Empty",
        });
      }

    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET Tanam Pohon by Id
  static async getTanamPohonbyId(req, res) {
    try {
      const tanamPohonID = req.params.id;

      const dataTanamPohon = await TANAMPOHON_MODEL.findOne({
        include: {
          model: Participant,
          attributes: ['user_id']
        },
        where: {
          tanam_pohon_id: Number(tanamPohonID),
        },
      });

      if (dataTanamPohon) {
        res.status(200).send({
          message: `Success Get Tanam Pohon where Tanam Pohon Id is ${tanamPohonID}`,
          TanamPohon: dataTanamPohon,
        });
      } else {
        res.status(404).send({
          message: `Data Tanam Pohon where Tanam Pohon Id is ${tanamPohonID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }
}

module.exports = TanamPohonController;
