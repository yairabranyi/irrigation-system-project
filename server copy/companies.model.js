const { Schema, model } = require("mongoose");

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    catchPhrase: String,
    bs: String
});

const CompanyModel = model("Company", CompanySchema);

module.exports = {
    CompanyModel
};