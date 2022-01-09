const { Op } = require("sequelize");
const FORUM_MODEL = require("../models").Forum;
const { Comment, Issue } = require("../models");

class ForumController {
  // POST New Forum
  static postNewForum(req, res) {
    try {
      const newForum = {
        title: req.body.title,
        image_url: req.body.image_url,
        banner_url: req.body.banner_url,
        description: req.body.description,
      };
      FORUM_MODEL.create(newForum)
        .then((result) => {
          res.status(200).json({
            message: "Success post new Forum!",
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

  // GET All Forum
  static async getAllForums(req, res) {
    try {
      const dataForum = await FORUM_MODEL.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      const forumID = dataForum.map((forum) => forum.dataValues.forum_id);

      const dataIssue = await Issue.findAll({
        where: {
          forum_id: {
            [Op.in]: forumID,
          },
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

      const resultIssues = dataIssue?.map((issue) => {
        const tempIssues = {
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
          createdAt: issue.dataValues.createdAt,
        };
        return tempIssues;
      });

      const result = dataForum?.map((forum) => {
        const temp = {
          forum_id: forum.dataValues.forum_id,
          title: forum.dataValues.title,
          image_url: forum.dataValues.image_url,
          banner_url: forum.dataValues.banner_url,
          description: forum.dataValues.description,
          Issues: resultIssues.filter(
            (issue) => issue.forum_id === forum.dataValues.forum_id
          ),
        };
        return temp;
      });

      if (dataForum.length != 0) {
        res.status(200).send({
          message: "Success Get All Forums",
          Forums: result,
        });
      } else {
        res.status(404).send({
          message: "Data Forums is Empty",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET Forum by Id
  static async getForumbyId(req, res) {
    try {
      const forumID = req.params.id;

      const dataForum = await FORUM_MODEL.findOne({
        where: {
          forum_id: Number(forumID),
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      const id = dataForum.dataValues.forum_id;

      const dataIssue = await Issue.findAll({
        where: {
          forum_id: Number(id),
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

      const resultIssues = dataIssue?.map((issue) => {
        const tempIssues = {
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
          dataForum: dataForum,
          createdAt: issue.dataValues.createdAt,
        };
        return tempIssues;
      });

      if (dataForum) {
        res.status(200).send({
          message: `Success Get Forum where Forum Id is ${forumID}`,
          Forums: resultIssues,
        });
      } else {
        res.status(404).send({
          message: `Data Forum where Forum Id is ${forumID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // UPDATE Forum by Id
  static async updateForumById(req, res) {
    try {
      const forumID = req.params.id;
      console.log(forumID);
      const { title, image_url, banner_url, description } = req.body;

      const updateForum = {
        title: title,
        image_url: image_url,
        banner_url: banner_url,
        description: description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const dataForum = await FORUM_MODEL.findOne({
        where: {
          forum_id: Number(forumID),
        },
      });

      if (dataForum) {
        await FORUM_MODEL.update(updateForum, {
          where: {
            forum_id: Number(forumID),
          },
        });
        res.status(200).send({
          message: `Data Forum where Forum Id is ${forumID} was Updated Successfully`,
          updatedForum: updateForum,
        });
      } else {
        res.status(404).send({
          message: `Data Forum where Forum Id is ${forumID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // DELETE Forum by Id
  static async deleteForumById(req, res) {
    try {
      const forumID = req.params.id;

      const dataForum = await FORUM_MODEL.findOne({
        where: {
          forum_id: Number(forumID),
        },
      });

      if (dataForum) {
        await FORUM_MODEL.destroy({
          where: {
            forum_id: Number(forumID),
          },
        });
        res.status(200).send({
          message: `Data Forum where Forum Id is ${forumID} was Deleted Successfully`,
          deletedForum: dataForum,
        });
      } else {
        res.status(404).send({
          message: `Data Forum where Forum Id is ${forumID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }
}

module.exports = ForumController;
