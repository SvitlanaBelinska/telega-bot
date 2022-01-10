const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB({
    region: 'us-east-2',
    apiVersion: '2012-08'
});

exports.dynamo = (message_id, first_name, last_name, text, callback) => {
    console.log(message_id, first_name, last_name, text)
    const params = {
        Item:{
            "message_id": {
                N: String(message_id)
            },
            "user_first_name": {
                S: first_name
            },
            "user_last_name": {
                S: last_name
            },
            "user_message": {
                S: text
            }
          
        },
        TableName: "telebottable"
    };
    dynamoDB.putItem(params, function(err, data) {
        if (err){
            console.log(err);
            callback(err);
        } else {
            console.log(data);
            callback(null, data);
        }
    })
};
