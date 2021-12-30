const DOCUMENTATION_MODEL = require("../models").Documentation;
const PARTICIPANT_MODEL = require("../models").Participant;
const TANAMPOHON_MODEL = require("../models").TanamPohon;

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
        // Participant?
        const dataParticipant = await TANAMPOHON_MODEL.findOne({});
      }
      // const dataTanamPohon = await TANAMPOHON_MODEL.findAll({
      //   include: {
      //     model: DOCUMENTATION_MODEL,
      //     include: {
      //       model: PARTICIPANT_MODEL,
      //     },
      //   },
      //   where: {
      //     id: Number(req.params.tanam_pohon_id),
      //   },
      // });
      res.status(201).send({
        message: `Success Create New Documentation`,
        // data: newDocumentation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All Documentation
  static async getAllDocumentation(req, res, next) {
    try {
      res.status(200).send({
        message: `Success Get Data Documentations`,
        // data: newDocumentation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get Documentation By Id
  static async getDocumentationById(req, res, next) {
    try {
      res.status(200).send({
        message: `Success Get One Data Documentation`,
        // data: newDocumentation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update Documentation By Id
  static async updateDocumentationById(req, res, next) {
    try {
      res.status(201).send({
        message: `Data Documentation Id ${dataID} was Updated Successfully`,
        // data: newDocumentation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete Documentation By Id
  static async deleteDocumentationById(req, res, next) {
    try {
      res.status(200).send({
        message: `Data Documentation Id ${dataID} was Deleted Successfully`,
        // data: newDocumentation,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DocumentationController;
