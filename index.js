const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "Rajath M R",
        content : "I love Coding"
    },
    {
        username : "Vishwas",
        content : "I love talking"
    },
    {
        username : "Prajwal",
        content : "I love playing FF"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
