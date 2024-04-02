const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thought_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    created_at: {
      type: Date,
      default: Date.now,
      get: (date) => timeSince(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    toJson: {getters: true, virtuals: true},
  }
)

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
