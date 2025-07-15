import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const getLeetCodeProfile = async (username) => {
  const res = await axios.get(`${backendUrl}/api/leetcode/${username}`);
  return res.data;
};
