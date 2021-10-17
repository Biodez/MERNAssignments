const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
require("./config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorRoutes = require("./routes/authors.route");
authorRoutes(app);

app.listen(port, () => console.log(`listening on port ${port}`));
