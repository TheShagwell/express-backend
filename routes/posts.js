const express = require("express");
const router = express.Router();
const getPosts = require("../controllers/postController");


router 
    .route('/')
    .get(getPosts.getFilter)
    .get(getPosts.getPostLimit)
    
router
  .route("/")
  .get(getPosts.getAllPost)

router
  .route("/")
  .post(getPosts.createPost)
  

router
  .route("/:id")
  .put(getPosts.updatePost)
  .get(getPosts.getPostID)
  .delete(getPosts.deletePost)


module.exports = router;
