const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommunityLikesSchema = new Schema({
  community: { type: Schema.Types.ObjectId, required: true, index: true },
  user: { type: Schema.Types.ObjectId, required: true, index: true },
});

CommunityLikesSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  return next();
});

module.exports = mongoose.models.community_likes || mongoose.model('community_likes', CommunityLikesSchema);
