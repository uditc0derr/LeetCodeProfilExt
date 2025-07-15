exports.formatProfileData = (rawData) => {
  return {
    username: rawData.username,
    realName: rawData.profile.realName,
  
  };
};
