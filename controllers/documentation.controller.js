const DOCUMENTATION_MODEL = require("../models").Documentation;
// const PARTICIPANT_MODEL = require("../models").Participant;
const TANAMPOHON_MODEL = require("../models").Tanam_Pohon;

class DocumentationController {
  // Create New Documentation
  static async createNewDocumentation(req, res, next) {
    try {
      const tanamPohonID = req.params.id;

      const { caption, image_url, messages } = req.body;

      // Data Kosong?
      if ((!caption, image_url, messages)) {
        next({
          code: 400,
          message: "'caption', 'image_url', 'messages' can't be empty",
        });
      } else {
        res.status(201).send({
          message: `Success Create New Documentation`,
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
        include: {
          model: DOCUMENTATION_MODEL,
          attributes: ["documentation_id"],
        },
        attributes: ["title"],
      });

      res.status(200).send({
        message: `Success Get Data Documentations`,
        documentations: data,
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
          attributes: ["documentation_id", "image_url", "createdAt"],
          // include: {
          //   model: PARTICIPANT_MODEL,
          //   attributes: ["name"],
          // },
          order: [["createdAt", "DESC"]],
        },
        where: {
          tanam_pohon_id: Number(tanamPohonID),
        },
        attributes: ["title"],
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
        // include: {
        //   model: PARTICIPANT_MODEL,
        //   attributes: ["name"]
        // },
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
