const express = require("express");
/** Create the express app */
const app = express();

const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const routes = require("./routes/htmlRoutes");

/** Declare usage of express app */
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});