require('dotenv').config();
const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: process.env.BOT_TOKEN,
  name: 'jokebot'
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };

  bot.postMessageToChannel('general', 'Get Ready To Laugh With @Jokebot!', params);
});

// Error Handler
bot.on('error', () => console.log(err));
