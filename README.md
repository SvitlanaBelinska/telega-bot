# telega-bot
nodeJS bot working through lambda
npm init --yes
npm i --save axios
npm i --save-dev serverless serverless-dotenv-plugin serverless-offline
.env ---> TELEGRAM_TOKEN=<TELEGRAM_ACCESS_TOKEN>
npm run deploy
endpoint like https://sg2bxp8khj.execute-api.us-east-2.amazonaws.com/dev/
webhook
https://api.telegram.org/botTELEGRAM_ACCESS_TOKEN/setWebhook?url=endpoint
