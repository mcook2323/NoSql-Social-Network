const router = require('express').Router();

const{
getAllThoughts,
getThoughtsById,
createThought,
deleteThought,
updateThoughtById,
createReaction,
deleteReaction
} = require('../../controllers/thought');

// GET and POST all users
router.route('/').get(getAllThoughts).post(createThought)

// GET and POST with id
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought)

// Define the route for POST reaction to a Thought
router.route('/:thoughtId/reactions').post(createReaction);

// Define the route for DELETE reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
// Export the router
module.exports = router;