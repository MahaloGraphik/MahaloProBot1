const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = '6339811227:AAHeB2y-VzXQ1ASs2OdWgJITLj4KIw72TyI';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Command handler for /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Inline keyboard with Subscribe and Login buttons
    const keyboard = {
        inline_keyboard: [
            [{ text: 'Subscribe', url: 'https://t.me/mahaloprobot_bot?start=subscribe' }],
            [{ text: 'Login', callback_data: 'login' }]
        ]
    };

    // Options for sending a message with inline keyboard
    const opts = {
        reply_markup: JSON.stringify(keyboard),
    };

    // Send message with inline keyboard
    bot.sendMessage(chatId, 'Choose an option:', opts);
});

// Callback query handler for button clicks
bot.on('callback_query', (callbackQuery) => {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;

    // Handle different actions based on button click
    switch (action) {
        case 'subscribe':
            // Implement logic for subscription
            bot.answerCallbackQuery(callbackQuery.id, { text: 'Processing subscription...' });
            break;
        case 'login':
            // Implement logic for login
            bot.answerCallbackQuery(callbackQuery.id, { text: 'Processing login...' });
            break;
        default:
            break;
    }
});

