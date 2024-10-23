const express = require("express");
const router = express.Router();

// JSON API Reference
const jsonPost = [
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
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post)
    return res
      .status(404)
      .json({ message: `A post with id ${id} was not found` });

  res.status(200).json(post);
});

// * To get all posts
router.get("/", (req, res) => {
  res.json(jsonPost);
});


module.exports = router;  