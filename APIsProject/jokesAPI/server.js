const express = require("express");
const app = express();
const port = 3010;

require("./config/mongoose.config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokesRoute = require("./routes/jokesRoutes");
jokesRoute(app);

app.listen(port, () => console.log(`Express is running on port ${port}`));
