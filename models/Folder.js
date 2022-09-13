const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {type: String},
    files:[{type: mongoose.Schema.Types.ObjectId, ref: "File"}],
    folders:[{type: mongoose.Schema.Types.ObjectId, ref: "Folder"}],
    clearanceLevel: {type: Number, default: 1},
    type: {type: String, default: "official"} //official, logs, review
  },
  {timestamps: true}
)

schema.methods.fullName = function fullname(){
  return this.firstName + " " + this.lastName;
}

const Model = mongoose.model("Folder", schema);

module.exports = Model;