const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: { 
    type: String, 
    required: [true, 'Content is required'],
    trim: true,
    minlength: [10, 'Content must be at least 10 characters long'],
    maxlength: [5000, 'Content cannot exceed 5000 characters']
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true
  }
}, {
  timestamps: true
});

// Index for better query performance when fetching posts with user info
PostSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model("Post", PostSchema);
