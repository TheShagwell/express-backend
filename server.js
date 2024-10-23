const express = require("express");
const path = require("path");
const posts = require("./routes/posts")
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandle");
const notFound = require("./middleware/notFound");
const PORT = process.env.PORT || 9001;

const app = express();

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request middleware 
app.use(logger);

// setup static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/posts', posts);

// Not Found
app.use(notFound)

// Tackling Errors
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
