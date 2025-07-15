const axios = require('axios');
const queries = require('../config/graphqlQueries');

const GRAPHQL_URL = 'https://leetcode.com/graphql';

async function fetchLeetCodeProfile(username) {
  try {
    const profileRes = await axios.post(GRAPHQL_URL, {
      query: queries.userPublicProfile,
      variables: { username }
    });

    const profileData = profileRes.data.data.matchedUser;

    const solvedRes = await axios.post(GRAPHQL_URL, {
      query: queries.userProblemsSolved,
      variables: { username }
    });

    const solvedData = solvedRes.data.data;
    const acNums = solvedData.matchedUser.submitStatsGlobal.acSubmissionNum;
    const totalSolved = acNums.find(i => i.difficulty === 'All').count;
    const totalSubmissions = acNums.find(i => i.difficulty === 'All').submissions;
    const acceptanceRate = totalSubmissions > 0 ? ((totalSolved / totalSubmissions) * 100).toFixed(2) : 0;

    const easy = acNums.find(i => i.difficulty === 'Easy')?.count || 0;
    const medium = acNums.find(i => i.difficulty === 'Medium')?.count || 0;
    const hard = acNums.find(i => i.difficulty === 'Hard')?.count || 0;
    

    const beats = solvedData.matchedUser.problemsSolvedBeatsStats?.find(i => i.difficulty === 'All')?.percentage || 0;

    const skillRes = await axios.post(GRAPHQL_URL, {
      query: queries.skillStats,
      variables: { username }
    });

    const skillCounts = skillRes.data.data.matchedUser.tagProblemCounts;
    const advanced = skillCounts.advanced.reduce((sum, t) => sum + t.problemsSolved, 0);
    const intermediate = skillCounts.intermediate.reduce((sum, t) => sum + t.problemsSolved, 0);
    const fundamental = skillCounts.fundamental.reduce((sum, t) => sum + t.problemsSolved, 0);

    const langRes = await axios.post(GRAPHQL_URL, {
      query: queries.languageStats,
      variables: { username }
    });

    const languages = langRes.data.data.matchedUser.languageProblemCount;

    return {
      username: profileData.username,
      realName: profileData.profile.realName,
      acceptanceRate: parseFloat(acceptanceRate),
      totalSolved,
      beatsPercentage: parseFloat(beats),
      easy,
      medium,
      hard,
      ranking: profileData.profile.ranking,
      reputation: profileData.profile.reputation,
      country: profileData.profile.countryName,
      proficiency: { advanced, intermediate, fundamental },
      languages,
      githubUrl: profileData.githubUrl,
      linkedinUrl: profileData.linkedinUrl,
      avatar: profileData.profile.userAvatar,
    };
  } catch (error) {
    console.error('Fetch error:', error.response?.data || error.message);
    throw new Error('Failed to fetch profile data');
  }
}

module.exports = { fetchLeetCodeProfile };
