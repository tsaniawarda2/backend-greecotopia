const CLAIM_REWARD_MODEL = require("../models").Claim_Reward;

class ClaimRewardController {
  // POST New Claim Reward
  static postNewClaimReward(req, res) {
    try {
      const newClaimReward = {
        no_hp: req.body.no_hp,
        user_id: req.userAccount.user_id,
      };
      CLAIM_REWARD_MODEL.create(newClaimReward)
        .then((result) => {
          res.status(200).json({
            message: "Success post claim reward!",
            dataClaimReward: result,
          });
        })
        .catch((err) => res.status(400).json({ message: err }));
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Claim Reward by User Id
  static async getClaimRewardsByUserId(req, res) {
    try {
      const user = req.params.id;

      const dataClaimReward = await CLAIM_REWARD_MODEL.findOne({
        where: {
          user_id: user,
        },
      });

      if (dataClaimReward) {
        if (Number(req.userAccount.user_id) === Number(user)) {
          res.status(200).send({
            message: "Success Get Your Claim Reward History",
            data: dataClaimReward,
          });
        } else {
          res.status(400).send({
            message: "Data Claim Reward is Not Yours",
          });
        }
      } else {
        res.status(404).send({
          message: "Data Claim Reward is Empty",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Reward
  static async getAllReward(req, res, next) {
    try {
      const dataReward = await CLAIM_REWARD_MODEL.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (!dataReward) {
        next({
          code: 404,
          message: `Data Rewards is Empty`,
        });
      } else {
        res.status(200).send({
          message: "Success Get All Rewards",
          Rewards: dataReward,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ClaimRewardController;
