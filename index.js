const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4 : uuidv4 } = require('uuid');



app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//Array with users details
let posts = [
    {
        id:uuidv4(),
        username : "Rajath M R",
        content : "I love Coding"
    },
    {
        id:uuidv4(),
        username : "Vishwas",
        content : "I love talking"
    },
    {
        id:uuidv4(),
        username : "Prajwal",
        content : "I love playing FF"
    }
];
//shows the POsts Page
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

//provides a form to create new user
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

//gets username and content and creates a unique id for each users and push the new user to posts 
// array and redirects to /posts api
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

//view post in detail
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => 
        id === p.id
    );   
    res.render("show.ejs", {post});
});

//server activation notification
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
