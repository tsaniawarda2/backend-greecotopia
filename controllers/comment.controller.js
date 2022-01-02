const COMMENT_MODEL = require("../models").Comment;
const { v4: uuidV4 } = require("uuid");

class CommentController {
  // POST New Comment
  static postNewComment(req, res) {
    try {
      const issue = req.params.id;

      const newComment = {
        context: req.body.context,
        createdAt: new Date(),
        updatedAt: new Date(),
        rep_comments: null,
        user_id: req.userAccount.user_id,
        issue_id: issue,
      };

      COMMENT_MODEL.create(newComment)
        .then((result) => {
          res.status(200).json({
            message: "Success post new Comment!",
            result,
          });
        })
        .catch((err) => res.status(400).json({ message: err }));
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  //POST New reply comment
  static async postNewRepComment(req, res) {
    try {
      const comments = await COMMENT_MODEL.findOne({
        where: {
          comment_id: req.params.id,
        },
      });

      if (comments) {
        const rep_comments = comments.rep_comments;

        const newRepComment = {
          uuid: uuidV4(),
          context: req.body.context,
          author: {
            user_id: req.userAccount.user_id,
            username: req.userAccount.username,
            avatar: req.userAccount.avatar,
          },
          depends_on: {
            author: req.body.depends_on.author,
            uuid: req.body.depends_on.uuid,
          },
          likes: []
        };

        const new_rep_comment = rep_comments
          ? [...rep_comments, newRepComment]
          : [newRepComment];

        await COMMENT_MODEL.update(
          {
            rep_comments: new_rep_comment,
          },
          {
            where: {
              comment_id: req.params.id,
            },
          }
        );
        res.status(200).send({
          message: "New reply comment was posted successfully!",
          data: newRepComment,
        });
      } else {
        res.status(404).send({
          message: "Data Comment Not Found!",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Comment
  static async getAllComments(req, res) {
    try {
      const dataComment = await COMMENT_MODEL.findAll();

      if (dataComment.length != 0) {
        const result = dataComment.map((comment) => {
          const {
            context,
            createdAt,
            updatedAt,
            rep_comments,
            user_id,
            issue_id,
          } = comment;
          return {
            context,
            createdAt,
            updatedAt,
            rep_comments: rep_comments ? JSON.parse(rep_comments) : [],
            user_id,
            issue_id,
          };
        });
        res.status(200).send({
          message: "Success Get All Comments",
          comments: result,
        });
      } else {
        res.status(404).send({
          message: "Data Comments is Empty",
        });
      }
    } catch (error) {
      res.status(500).send({
        error: "Internal Server Error",
      });
    }
  }

  // GET Comment by Id
  static async getCommentById(req, res) {
    try {
      const commentID = req.params.id;

      const dataComment = await COMMENT_MODEL.findOne({
        where: {
          comment_id: Number(commentID),
        },
      });

      if (dataComment) {
        res.status(200).send({
          message: `Success Get Comment where Comment Id is ${commentID}`,
          comments: dataComment,
        });
      } else {
        res.status(404).send({
          message: `Data Comment where Comment Id is ${commentID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // GET All Comment by Issue Id
  static async getCommentByIssueId(req, res) {
    try {
      const issue = req.params.id;

      const dataComment = await COMMENT_MODEL.findOne({
        where: {
          issue_id: issue,
        },
      });

      if (dataComment) {
        res.status(200).send({
          message: `Success Get Comment where Issue Id is ${issue}`,
          comments: dataComment,
        });
      } else {
        res.status(404).send({
          message: `Data Comment Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  // DELETE Comment by Id
  static async deleteCommentById(req, res) {
    try {
      const commentID = req.params.id;
      const userID = req.userAccount.user_id;

      const dataComment = await COMMENT_MODEL.findOne({
        where: {
          comment_id: Number(commentID),
        },
      });

      if (dataComment) {
        const commentUser = await COMMENT_MODEL.destroy({
          where: {
            comment_id: Number(commentID),
            user_id: Number(userID),
          },
        });
        if (Number(req.userAccount.user_id) === Number(dataComment.user_id)) {
          res.status(200).send({
            message: `Data Comment where Comment Id is ${commentID} was Deleted Successfully`,
            deletedComment: dataComment,
          });
        } else {
          res.status(404).send({
            message: `Cannot delete Comment because this comment is not authored by you`,
          });
        }
      } else {
        res.status(404).send({
          message: `Data Comment where Comment Id is ${commentID} Not Found`,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }

  static async updateLikeCommentById(req, res){
    try {
      const commentID = req.params.id;
      const userID = req.userAccount.user_id;
  

      const { rep_comments_uuid, like } = req.body;
      
      const dataComment = await COMMENT_MODEL.findOne({
        where: {
          comment_id: Number(commentID)
        },
      });
      
      if(rep_comments_uuid){
        if(dataComment){
          const repComment = dataComment.dataValues.rep_comments
          const repCommentParse = JSON.parse(repComment)

          const findRepComment = repCommentParse.filter(rep_comment => rep_comment.uuid == rep_comments_uuid)

          if(findRepComment.length !== 0){
            const currRepComment = dataComment.dataValues.rep_comments ? JSON.parse(dataComment.dataValues.rep_comments) : []

            const newRepComments = currRepComment.map(comment => {
              if(comment.uuid === rep_comments_uuid){
                if(like){
                  comment.likes.push(userID)
                } else {
                  for( let i = 0; i < comment.likes.length; i++){ 
                                   
                    if ( comment.likes[i] === userID) { 
                        comment.likes.splice(i, 1); 
                        i--; 
                    }
                }
                }
              } else {
                return comment
              }
            })
            
            const updateNewRepComment = currRepComment

            await COMMENT_MODEL.update(
              {
                rep_comments: updateNewRepComment,
              },
              {
                where: {
                  comment_id: req.params.id,
                },
              }
            );
            res.status(200).send({
              message: "Success like a reply comment!",
              data: updateNewRepComment,
            });
          }
          else {
            res.status(404).send({
              message: `Data Reply Comment where Comment uuid is ${rep_comments_uuid} Not Found`,
            });
          }
        } else {
          res.status(404).send({
            message: `Data Comment where Comment Id is ${commentID} Not Found`,
          });
        }
      } 
      else {
        const updateComment = {
          like : req.body.like
        }

        if (dataComment) {
          await COMMENT_MODEL.update(updateComment, {
            where: {
              comment_id: Number(commentID),
            },
          });
          res.status(200).send({
            message: `Data Comment where Comment Id is ${commentID} was Updated like Successfully`,
            updatedComment: updateComment,
          });
        } else {
          res.status(404).send({
            message: `Data Comment where Comment Id is ${commentID} Not Found`,
          });
        }
      }
    } catch (error) {
      res.status(500).send({
        error: error.message || "Internal Server Error",
      });
    }
  }
}

module.exports = CommentController;
