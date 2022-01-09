const CLAIM_REWARD_MODEL = require("../models").Claim_Reward;

class ClaimRewardController {
  // POST New Claim Reward
  static postNewClaimReward(req, res) {
    try {
      const newClaimReward = {
        np_hp: req.body.np_hp,
        rank: req.body.rank,
        session_month: req.body.session_month,
        year: req.body.year,
        date_of_claim: req.body.date_of_claim,
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

      const dataClaimReward = await CLAIM_REWARD_MODEL.findAll({
        where: {
          user_id: user,
        },
      });

      if (dataClaimReward) {
        if (Number(req.userAccount.user_id) === Number(user)) {
          res.status(200).send({
            message: "Success Get Your Claim Reward History",
            favoriteIssues: dataClaimReward,
          });
        } else {
          res.status(400).send({
            message: "Data Claim Reward is Not Yours",
          });
        }
      } else {
        res.status(404).send({
          message: "Data Claim Reward is Not Found",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }
}

module.exports = ClaimRewardController;
