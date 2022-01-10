const telegram = require('./telegram');
const dynamo = require('./dynamo-store-data')

module.exports.processWebhook = async event => {
    const body = JSON.parse(event.body);

    console.log(body); // Логируем body

    if (body && body.message) {
        const {message_id, chat, text, from} = body.message;
        console.log(body.message);
        if (body.message) {
        await dynamo.dynamo(message_id, from.first_name, from.last_name, text, ()=>{});
        }
        if(text == 'hello'){
        await telegram.sendMessage({ chat_id: chat.id, text: `Hi , nice to meet you ${from.first_name}` });
        
        } else {
        
        await telegram.sendMessage({ chat_id: chat.id,  text: `${from.last_name} You said: ${text}` });
        }
    }
  

    return { statusCode: 200 };
};
