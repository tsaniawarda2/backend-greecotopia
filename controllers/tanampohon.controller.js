const TANAMPOHON_MODEL = require("../models").Tanam_Pohon;

class TanamPohonController {
  // GET All Tanam Pohon
  static async getAllTanamPohons(req, res) {
    try {
      const dataTanamPohon = await TANAMPOHON_MODEL.findAll();

      if (dataTanamPohon.length != 0) {
        res.status(200).send({
          message: "Success Get All Tanam Pohon",
          TanamPohon: dataTanamPohon,
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
