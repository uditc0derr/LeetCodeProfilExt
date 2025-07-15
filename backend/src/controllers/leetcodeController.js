const { fetchLeetCodeProfile } = require('../services/leetcodeService');

exports.getProfile = async (req, res) => {
  try {
    const username = req.params.username;
    const data = await fetchLeetCodeProfile(username);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
