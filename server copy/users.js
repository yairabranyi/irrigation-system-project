const express = require("express");
const router = express.Router();
const { UsersModel } = require("./users.model");

router.get("/", async (req, res) => {
    const filter = {};
    const sort = {};

    if(req.query.name || req.query.email)
        filter.name = new RegExp(req.query.name, "i");
    if(req.query.email)
        filter.email = new RegExp(req.query.email, "i");

    if(req.query.sortField)
        sort[req.query.sortField] = req.query.sortDir || "asc";
    else
        sort.name = "asc";

    const users = await UsersModel.find(filter);
    res.send(users);
});

router.get("/:id", async (req, res) => {
    const user = await UsersModel.findById(req.params.id).populate("company");
    res.send(user);
});

router.delete("/:id", async (req, res) => {
    try {
        await UsersModel.findByIdAndDelete(req.params.id);
        res.send("ok");
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const user = await UsersModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.post("/", async (req, res) => {

    const user = new UsersModel(req.body);

    try {
        const result = await user.save();
        res.send(result);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = router;
