const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true,
    maxLength:100
  },
  image:{
    type: String,
  },
  address:{
    type: String,
    required:true
  },
  postBody:{
    type: String,
    maxLength:500
  },
  rating:{
    type: Number,
    min:1,
    max: 5
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  country:{
    type:mongoose.Schema.Types.ObjectId,
   ref:'Country'
  }
  
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);

module.exports = Post