const User = require('../models/user');

const protection = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id, { password: 0 })
    return res.json(user)
  } catch (error) {
    return res.sendStatus(500)
  }
}
 module.exports = protection;
