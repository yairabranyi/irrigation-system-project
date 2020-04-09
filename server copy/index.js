const express = require("express");
const usersRoute = require("./users");
const postsRoute = require("./posts");
const companiesRoute = require("./companies");
const path = require("path");
const { setDb } = require("./db");

const app = express();

setDb();


app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.use("/api/companies", companiesRoute);
app.use("/", express.static(path.join(__dirname, '../dist')));

app.listen(process.env.PORT || 3000);