const express = require("express");
const cors = require("cors")
const app = express()
const port  = 8000;
app.use(cors())

require("./config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const presonRoute =  require("./routes/person.routes");
presonRoute(app)


app.listen(port, () => console.log(`listening on port ${port}`));