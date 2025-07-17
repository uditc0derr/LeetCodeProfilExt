import axios from 'axios';

const backendUrl = 'https://leetcodeprofilext.onrender.com' || 'https://leetcodeprofilext.onrender.com';

export const getLeetCodeProfile = async (username) => {
  const res = await axios.get(`${backendUrl}/api/leetcode/${username}`);
  return res.data;
};
