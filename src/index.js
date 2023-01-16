const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.token;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);

  bot.sendMessage(chatId, msg.text);
});
