const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

const toPath = '../msbuild-japan-mlsa-ai-handson-20230628/';

const copyFolders = [
  './base/',
  './base/00-preparation/'
];

const copyFiles = [
  './base/00-preparation.md',
  './base/01-introduction.md',
  './base/02-create-azure-functions.md',
  './base/03-create-http-trigger.md',
  './base/04-linebot-and-openai-install.md',
  './base/05-line-bot-setting.md',
  './base/06-line-bot-check.md',
  './base/07-create-http-trigger-for-chatgpt.md',
  './base/08-line-bot-add-chatgpt.md',
  './base/09-chatgpt-check.md',
  './base/00-preparation/01-line-developer-login.md',
  './base/00-preparation/02-create-linebot.md',
  './base/00-preparation/03-get-chatgpt-api-key.md'
]

main = async () => {
  
  copyFolders.forEach(async folder => {
    const copyFolderPath = path.join(toPath,folder);
    if (!fs.existsSync(copyFolderPath)) {
      await fsPromises.mkdir(copyFolderPath);
    }
  });

  copyFiles.forEach(async item => {
    await fsPromises.copyFile(item,path.join(toPath,item));
  });
}
 
main();