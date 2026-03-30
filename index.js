const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.send("Hello Rajath! Your Express server is running 🚀");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
