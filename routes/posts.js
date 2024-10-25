const express = require("express");
const router = express.Router();
const getPosts = require("../controllers/postController");

router
  .route("/")
  .get(getPosts.getPostLimit)
  .get(getPosts.getFilter)
  .get(getPosts.getAllPost)
  .post(getPosts.createPost);

router
  .route("/:id")
  .put(getPosts.updatePost)
  .get(getPosts.getPostID)
  .delete(getPosts.deletePost);

// // * To get a limit of the number of posts
// router.get("/", );

// // * To get a single post
// router.get("/:id",);

// // * To get all posts
// router.get("/", );

// // * To create a new post
// router.post("/", );

// // * To update post
// router.put("/:id", );

// // * To delete post
// router.delete("/:id", );

module.exports = router;
