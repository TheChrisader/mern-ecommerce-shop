const DatauriParser = require("datauri/parser");
const path = require("path");

const dataUri = (req) => {
  const parser = new DatauriParser();
  const file = parser.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  ).content;

  return file;
};

module.exports = dataUri;
