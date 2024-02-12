const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
    },
    // defines the object if of the liked object
    likeable: {
      type: mongoose.Schema.ObjectId,
      require: true,
      // used to reference to another property
      refPath: "onModel",
    },
    // field used for defining the type of like object as it is dynamic reference
    onModel: {
      type: String,
      required: true,
      //
      enum: ["Post", "Comment"],
    },
  },
  {
    timestamps: true,
  }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
