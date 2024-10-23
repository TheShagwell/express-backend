const express = require("express");
const path = require("path");
const posts = require("./routes/posts")
const app = express();

const PORT = process.env.PORT || 9001;

// setup static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/post', posts);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
