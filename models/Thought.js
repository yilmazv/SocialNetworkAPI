const { Schema, model,Type } = require('mongoose');

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Type.ObjectId,
      default: new Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    
    },
    createdAt: {
        type: Date,
        default: Date.now
      
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: Type.ObjectId,
        default: new Types.ObjectId
      },
      createdAt: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
      },
      username: {
        type: String,
        required: true,
      
      },
      reactions: [reactionSchema]
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );


const Student = model('reaction', thoughtSchema);
