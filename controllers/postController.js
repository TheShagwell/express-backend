// JSON API Reference
    let jsonPost = [
    { id: 1, title: "Kesiena is here" },
    { id: 2, title: "Temi is here" },
    { id: 3, title: "Ezrah is here" },
    ];

// *** Get all the post
const getAllPost = (req, res) => {
  res.json(jsonPost);
};

// *** Get the post ID
const getPostID = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

// *** Create a post
const createPost = (req, res, next) => {
  const generateNewPost = {
    id: jsonPost.length + 1,
    title: req.body.title,
  };

  if (!generateNewPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }

  jsonPost.push(generateNewPost);
  res.status(201).json(jsonPost);
};

// *** Update the post
const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Please include a title`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(jsonPost);
};

// *** Delete the post
const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = jsonPost.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with id ${id} was not found` });
  }

  jsonPost = jsonPost.filter((post) => post.id !== id);
  res.status(200).json(jsonPost);
};

// *** Get the post limits
const getPostLimit = (req, res) => {
  // http://localhost:9001/api/posts?limit=2
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0)
    return res.status(200).json(jsonPost.slice(0, limit));

  res.status(200).json(jsonPost);
};

// *** Get filter by title
const getFilter = (req, res) => {
  const {
    query: { value },
  } = req;
  if (value) {
    const filteredPosts = jsonPost.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    return res.send(filteredPosts);
  }
  return res.send(jsonPost);
};

module.exports = {
  getAllPost,
  getPostID,
  createPost,
  updatePost,
  deletePost,
  getPostLimit,
  getFilter,
};
