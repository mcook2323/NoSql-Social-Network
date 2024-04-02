const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
  // Get all users 
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single user 
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({
          message: 'No user with that ID'
        });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create a new user 
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update user 
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Delete a user 
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json({ message: 'User Deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Add a friend to the database 
  async addFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { new: true }
      );

      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(userData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Remove a friend from the database 
  async removeFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );
  
      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
  
      // Check if friend was removed
      const removed = !dbUserData.friends.includes(params.friendId);
  
      // Return response with appropriate message
      if (removed) {
        res.json({ message: 'Friend removed successfully!', dbUserData });
      } else {
        res.json(dbUserData);
      }
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  }
  
  
};
