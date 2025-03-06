// const User=require('./models/UserSignUp');

// const getUserNameById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findOne({ id });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({ username: user.username });
//   } catch (err) {
//     console.error('Error fetching user:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { getUserNameById };

