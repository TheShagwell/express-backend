const colors = require("colors");

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
    PATCH: "magenta",
    OPTIONS: "cyan",
  }

  const methodColor = methodColors[req.method];
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[methodColor]
  );
  next();
};

module.exports = logger;
