const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {type: String},
    type: {type: String},
    number: {type: String},
    procedureClass: {type: String},
    clearanceLevel: {type: Number},
    clearanceLevelString: {type: String},
    clearanceExceptions: [],
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    status: {type: String}, //inReview, inProgress, inObservation, dormant
    text: [{type:{type: String},content:{type: String}}]
  },
  {timestamps: true}
)

schema.methods.fullName = function fullname(){
  return this.firstName + " " + this.lastName;
}

const Model = mongoose.model("File", schema);

module.exports = Model;