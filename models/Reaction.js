const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    
      reactionBody: {
        type: String,
        required: true,
        max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => timeSince(date),
    },
  },
  {
    timestamps: true,
    toJson: {getters: true, virtuals: true},
  }
)


module.exports = reactionSchema; 