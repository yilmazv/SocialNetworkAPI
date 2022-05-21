const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      thoughts: [
          {
            type: Schema.Types.ObjectsId,
            ref: 'Thought'    
          }
      ],
      friends: [
        {
          type: Schema.Types.ObjectsId,
          ref: 'User'    
        }
    ],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const Student = model('User', userSchema);
  module.exports = User;