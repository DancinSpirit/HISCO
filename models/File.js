const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {type: String},
    clearanceLevel: {type: Number},
    type: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "File"},
    status: {type: String}, //inReview, inProgress, inObservation, dormant
  },
  {timestamps: true}
)

schema.methods.fullName = function fullname(){
  return this.firstName + " " + this.lastName;
}

const Model = mongoose.model("File", schema);

module.exports = Model;