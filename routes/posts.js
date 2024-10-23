const express = require("express");
const router = express.Router();

// JSON API Reference
let jsonPost = [
  { id: 1, title: "Kesiena is here" },
  { id: 2, title: "Temi is here" },
  { id: 3, title: "Ezrah is here" },
];

// * To get a limit of the number of posts
router.get("/", (req, res) => {
  // http://localhost:9001/api/posts?limit=2
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0)
    return res.status(200).json(jsonPost.slice(0, limit));

  res.status(200).json(jsonPost);
});

// * To get a single post
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
});

// * To get all posts
router.get("/", (req, res) => {
  res.json(jsonPost);
});

// * To create a new post
router.post("/", (req, res, next) => {
  const generateNewPost = {
    id: jsonPost.length + 1,
    title: req.body.title,
  };

  if (!generateNewPost.title){
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }

  jsonPost.push(generateNewPost);
  res.status(201).json(jsonPost);
});

// * To update post
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Please include a title`);
    error.status = 404;
    return next(error);
  }    

  post.title = req.body.title;
  res.status(200).json(jsonPost);
});

// * To delete post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post)
    return res
      .status(404)
      .json({ message: `A post with id ${id} was not found` });

  jsonPost = jsonPost.filter((post) => post.id !== id);
  res.status(200).json(jsonPost);
});

module.exports = router;
