const router = require('express').Router();

const{
getUsers,
getSingleUser,
createUser,
updateUser,
deleteUser,
addFriend,
removeFriend
} = require('../../controllers/user');

// GET and POST all users
router.route('/').get(getUsers).post(createUser)

// GET and POST with id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

// Add friend and DELETE friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;