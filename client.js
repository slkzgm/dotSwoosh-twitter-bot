require('dotenv').config()
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_APPKEY,
  appSecret: process.env.TWITTER_APPSECRET,
  accessToken: process.env.TWITTER_ACCESSTOKEN,
  accessSecret: process.env.TWITTER_ACCESSSECRET,
});

const rwClient = client.readWrite;

module.exports = rwClient;
