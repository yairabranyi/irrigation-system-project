const express = require("express");
const router = express.Router();
let posts = require("./posts.json");

router.get("/", (req, res) => {
    let result = posts;
    if(req.query.userId) {
        result = posts.filter(post => post.userId == req.query.userId);
    }
    res.json(result);
});

module.exports = router;