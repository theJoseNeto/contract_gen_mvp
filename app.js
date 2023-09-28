const express = require("express");
const app = express();
const routes = require("./src/routes/index.routes");
const { join } = require("path");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", 'ejs');
app.set("views", join(__dirname, "src", "views"));
app.use(express.static(join(__dirname, "public")));
app.use('/', routes);

app.listen(3000, () => console.log('app is running'));
