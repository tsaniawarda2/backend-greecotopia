const { Op } = require("sequelize");
const DOCUMENTATION_MODEL = require("../models").Documentation;
const PARTICIPANT_MODEL = require("../models").Participant;
const TANAMPOHON_MODEL = require("../models").Tanam_Pohon;
const USER_MODEL = require("../models").User

class DocumentationController {
  // Create New Documentation
  static async createNewDocumentation(req, res, next) {
    try {
      const { caption, image_url, messages, tanam_pohon_id } = req.body;

      const dataTanamPohon = await TANAMPOHON_MODEL.findOne({
        where: {
          tanam_pohon_id: Number(tanam_pohon_id),
        },
      });
      // Data Tanam Pohon Ada?
      if (dataTanamPohon) {
        // Data Body Kosong?
        if (!caption || !image_url || !messages) {
          next({
            code: 400,
            message: "'caption', 'image_url', 'messages' can't be empty",
          });
        } else {
          const dataParticipant = await PARTICIPANT_MODEL.findOne({
            where: {
              user_id: req.userAccount.user_id,
              tanam_pohon_id: dataTanamPohon.tanam_pohon_id
            },
          });
          // Data Participant Ada?
          if (dataParticipant !== null) {
            const participant_id = dataParticipant.dataValues.participant_id;
            const newDocumentation = await DOCUMENTATION_MODEL.create({
              caption,
              image_url,
              messages,
              participant_id,
              tanam_pohon_id,
            });

            const totalPoints = dataTanamPohon?.dataValues?.reward_point * dataParticipant?.dataValues?.number_of_trees;
            await USER_MODEL.increment("points", {
              by: totalPoints,
              where:{
                user_id: req.userAccount.user_id
              }
            })

            res.status(201).send({
              message: `Success Create New Documentation!`,
              documentation: {
                documentation_id: newDocumentation.documentation_id,
                caption,
                image_url,
                messages,
                participant_id,
                tanam_pohon_id,
              },
            });
          } else {
            next({
              code: 401,
              message: "You haven't registered for this activity",
            });
          }
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

  // Get All Documentation
  static async getAllDocumentation(req, res, next) {
    try {
      const data = await TANAMPOHON_MODEL.findAll({
        attributes: ["tanam_pohon_id", "title"],
      });

      const tanamPohonID = data?.map(
        (tanamPohon) => tanamPohon.dataValues.tanam_pohon_id
      );

      const dataDocumentation = await DOCUMENTATION_MODEL.findAll({
        where: {
          tanam_pohon_id: {
            [Op.in]: tanamPohonID,
          },
        },
      });

      const result = data?.map((tanamPohon) => {
        const temp = {
          tanam_pohon_id: tanamPohon.dataValues.tanam_pohon_id,
          title: tanamPohon.dataValues.title,
          Documentations: dataDocumentation.filter(
            (doc) =>
              doc.dataValues.tanam_pohon_id ===
              tanamPohon.dataValues.tanam_pohon_id
          ),
        };
        return temp;
      });

      res.status(200).send({
        message: `Success Get Data Documentations`,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get Documentation By Tanam Pohon Id
  static async getDocumentationByTanamPohonId(req, res, next) {
    try {
      const tanamPohonID = req.params.id;

      const dataDocumentation = await TANAMPOHON_MODEL.findOne({
        include: {
          model: DOCUMENTATION_MODEL,
          attributes: ["documentation_id", "caption", "messages", "image_url", "createdAt"],
          include: {
            model: PARTICIPANT_MODEL,
            attributes: ["name"],
            include: {
              model: USER_MODEL,
              attributes: ["username", "image_url"]
            }
          },
          order: [["createdAt", "DESC"]],
        },
        where: {
          tanam_pohon_id: Number(tanamPohonID),
        },
        attributes: ["tanam_pohon_id", "title"],
      });

      if (dataDocumentation) {
        res.status(200).send({
          message: `Success Get One Data Documentation by Tanam Pohon Id ${tanamPohonID}`,
          data: dataDocumentation,
        });
      } else {
        next({
          code: 404,
          message: `Data Tanam Pohon Id ${tanamPohonID} Not Found`,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // Get Documentation By Id
  static async getDocumentationById(req, res, next) {
    try {
      const documentationID = req.params.id;

      const dataDocumentation = await DOCUMENTATION_MODEL.findOne({
        where: {
          documentation_id: Number(documentationID),
        },
        attributes: {
          exclude: ["participant_id", "tanam_pohon_id", "updatedAt"],
        },
        include: {
          model: PARTICIPANT_MODEL,
          attributes: ["name"],
        },
      });
      if (dataDocumentation) {
        res.status(200).send({
          message: `Success Get One Data Documentation`,
          data: dataDocumentation,
        });
      } else {
        next({
          code: 404,
          message: `Data Documentation Id ${documentationID} Not Found`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DocumentationController;
