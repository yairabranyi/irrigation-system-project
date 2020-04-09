const express = require("express");
const router = express.Router();
const { CompanyModel } = require("./companies.model");

router.get("/", async (req, res) => {
    const company = await CompanyModel.find({});
    res.send(company);
});

router.get("/:id", async (req, res) => {
    const company = await CompanyModel.findById(req.params.id);
    res.send(company);
});

router.delete("/:id", async (req, res) => {
    try {
        await CompanyModel.findByIdAndDelete(req.params.id);
        res.send("ok");
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const company = await CompanyModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.send(company);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.post("/", async (req, res) => {
    let company = new CompanyModel(req.body);
    try {
        const result = await company.save();
        res.send(result);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = router;
