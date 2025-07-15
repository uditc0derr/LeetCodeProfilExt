module.exports = {
  userPublicProfile: `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        username
        githubUrl
        linkedinUrl
        profile {
          realName
          ranking
          reputation
          countryName
          userAvatar
        }
      }
    }
  `,
  userProblemsSolved: `
    query userProblemsSolved($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        problemsSolvedBeatsStats {
          difficulty
          percentage
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `,
  skillStats: `
    query skillStats($username: String!) {
      matchedUser(username: $username) {
        tagProblemCounts {
          advanced {
            problemsSolved
          }
          intermediate {
            problemsSolved
          }
          fundamental {
            problemsSolved
          }
        }
      }
    }
  `,
  languageStats: `
    query languageStats($username: String!) {
      matchedUser(username: $username) {
        languageProblemCount {
          languageName
          problemsSolved
        }
      }
    }
  `
};
