const express = require("express");
const app = express();
// const nunjucks = require("nunjucks");

// nunjucks.configure("./views", { autoescape: true, express: app });

app.get("/", function (req, res) {
    res.render("./index.html");
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});
// nunjucks.renderString("Hello {{ username }}", { username: "James" });
