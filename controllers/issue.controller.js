const { Op } = require("sequelize");
const ISSUE_MODEL = require("../models").Issue;
const { User, Forum, Comment } = require("../models");

class IssueController {
  // POST New Issue
  static postNewIssue(req, res) {
    try {
      const newIssue = {
        title: req.body.title,
        summary: req.body.summary,
        decsription: req.body.decsription,
        author_name: req.body.author_name,
        image_url: req.body.image_url,
        likes: req.body.likes,
        tag_id: req.body.tag_id,
        forum_id: req.body.forum_id,
      };
      ISSUE_MODEL.create(newIssue)
        .then((result) => {
          res.status(200).json({
            message: "Success post new Issue!",
            result,
          });
        })
        .catch((err) => res.status(400).json({ message: err }));
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
      log;
    }
  }

  // GET All Issue
  static async getAllIssues(req, res) {
    try {
      const dataIssue = await ISSUE_MODEL.findAll({
        attributes: {
          exclude: ["updatedAt"],
        },
      });

      const issueID = dataIssue.map((issue) => issue.dataValues.issue_id);

      const dataComment = await Comment.findAll({
        where: {
          issue_id: {
            [Op.in]: issueID,
          },
        },
      });

      const result = dataIssue?.map((issue) => {
        const temp = {
          issue_id: issue.dataValues.issue_id,
          title: issue.dataValues.title,
          summary: issue.dataValues.summary,
          decsription: issue.dataValues.decsription,
          author_name: issue.dataValues.author_name,
          image_url: issue.dataValues.image_url,
          likes: issue.dataValues.likes,
          Comments: dataComment.filter(
            (comment) =>
              comment.dataValues.issue_id === issue.dataValues.issue_id
          ),
          tag_id: issue.dataValues.tag_id,
          forum_id: issue.dataValues.forum_id,
        };
        return temp;
      });

      if (dataIssue.length != 0) {
        res.status(200).send({
          message: "Success Get All Issues",
          Issues: result,
        });
      } else {
        res.status(404).send({
          message: "Data Issues is Empty",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET Issue by Id
  static async getIssuebyId(req, res) {
    try {
      const issueID = req.params.id;
      const dataIssue = await ISSUE_MODEL.findOne({
        where: {
          issue_id: Number(issueID),
        },
      });

      if (dataIssue) {
        res.status(200).send({
          message: `Success Get Issue Id ${issueID}`,
          dataIssues: dataIssue,
        });
      } else {
        res.status(404).send({
          message: `Data Issue Id ${issueID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // UPDATE Issue by Id
  static async updateIssueById(req, res) {
    try {
      const issueID = req.params.id;
      console.log(issueID);
      const {
        title,
        summary,
        description,
        author_name,
        image_url,
        likes,
        tag_id,
        forum_id,
      } = req.body;

      const updateIssue = {
        title: title,
        summary: summary,
        description: description,
        author_name: author_name,
        image_url: image_url,
        likes: likes,
        createdAt: new Date(),
        updatedAt: new Date(),
        tag_id: tag_id,
        forum_id: forum_id,
      };

      const dataIssue = await ISSUE_MODEL.findOne({
        where: {
          issue_id: Number(issueID),
        },
      });

      if (dataIssue) {
        await ISSUE_MODEL.update(updateIssue, {
          where: {
            issue_id: Number(issueID),
          },
        });
        res.status(200).send({
          message: `Data Issue Id ${issueID} was Updated Successfully`,
          updatedIssue: updateIssue,
        });
      } else {
        res.status(404).send({
          message: `Data Issue Id ${issueID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // DELETE Issue by Id
  static async deleteIssueById(req, res) {
    try {
      const issueID = req.params.id;

      const dataIssue = await ISSUE_MODEL.findOne({
        where: {
          issue_id: Number(issueID),
        },
      });

      if (dataIssue) {
        await ISSUE_MODEL.destroy({
          where: {
            issue_id: Number(issueID),
          },
        });
        res.status(200).send({
          message: `Data Issue Id ${issueID} was Deleted Successfully`,
          deletedIssue: dataIssue,
        });
      } else {
        res.status(404).send({
          message: `Data Issue Id ${issueID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Issue by Forum Id
  static async getIssuebyForumId(req, res) {
    try {
      const forumID = req.params.id;

      const dataIssue = await ISSUE_MODEL.findAll({
        where: {
          forum_id: forumID,
        },
      });

      if (dataIssue.length !== 0) {
        res.status(200).send({
          message: `Success Get Issue`,
          Issues: dataIssue,
        });
      } else {
        res.status(404).send({
          message: `Data Issue Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }
}

module.exports = IssueController;
