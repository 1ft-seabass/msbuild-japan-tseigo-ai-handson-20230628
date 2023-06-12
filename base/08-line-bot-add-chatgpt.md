# ChatGPT API の仕組みの反映

コードとテストに戻ります。

![611c3fa73ac0238b1fc2a5ef6a08e73f](https://i.gyazo.com/611c3fa73ac0238b1fc2a5ef6a08e73f.png)

コードエディタのコードをすべて選択して以下のコードで上書きします。

```js
// LINE Bot SDK ライブラリの読み込み
const line = require('@line/bot-sdk');

// チャンネルアクセストークンとチャネルシークレット設定
const configLINE = {
    channelAccessToken: 'channelAccessToken',
    channelSecret:  'channelSecret',
};

// LINE Bot SDK ライブラリを呼び出しつつ設定
const client = new line.Client(configLINE);

// OpenAI ライブラリを読み込む
const { Configuration, OpenAIApi } = require("openai");

// OpenAI の ChatGPT API の API キー設定
const configOpenAI = {
    apiKey: 'apiKey',
};

// OpenAI ライブラリを呼び出しつつ設定
const configuration = new Configuration(configOpenAI);
const openai = new OpenAIApi(configuration);

module.exports = async function (context, req) {
    context.log('LINE Bot start...');
    if (req.query.message || (req.body && req.body.events)) {
        if (req.body && req.body.events[0]) {
            // 今回の質問
            const currentMesssage = req.body.events[0].message.text;
            context.log(currentMesssage);
            // ChatGPT API に質問する
            let responseChatGPT;
            try {
                responseChatGPT = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {role: "user", content: currentMesssage}
                    ],
                });
                context.log(responseChatGPT.data.choices[0].message);
            } catch(e){
                context.log(e);
            }
            // 実際に LINE に返答する処理
            if (req.body.events[0].replyToken) {
                // 返答の 0 番目を取得
                const contentFromChatGPT = responseChatGPT.data.choices[0].message.content;
                // 返答
                client.replyMessage(req.body.events[0].replyToken, {
                    "type": "text",
                    "text": contentFromChatGPT
                });
            }
        } else {
            context.res = {
                status: 200,
                body: req.query.message
            };
        }
    }
    else {
        // LINE 以外のアクセスだとこちらを返信（ブラウザ確認用）
        context.res = {
            status: 200,
            body: "Hello! ChatGPT + LINE Bot + Azure Functions!"
        };
    };
};
```

上書きできたら、LINE Bot と ChatGPT の設定を反映します。

```js
// チャンネルアクセストークンとチャネルシークレット設定
const configLINE = {
    channelAccessToken: 'channelAccessToken',
    channelSecret:  'channelSecret',
};
```

こちらに注目します。

```js
channelAccessToken: 'channelAccessToken',
```

`'channelAccessToken'` のところのシングルクオーテーションの中を、今回動かしたい LINE Bot のチャネルアクセストークンに書き換えます。

もし、チャネルアクセストークンが `ABCDEFG` の場合は、両脇のシングルクオーテーションを
残して書き換えるので `'ABCDEFG'` になります。

```js
channelSecret:  'channelSecret',
```

`'channelSecret'` のところのシングルクオーテーションの中を、今回動かしたい LINE Bot のチャネルシークレットに書き換えます。

もし、チャネルシークレットが `12345678` の場合は、両脇のシングルクオーテーションを
残して書き換えるので `'12345678'` になります。

```js
// OpenAI の ChatGPT API の API キー設定
const configOpenAI = {
    apiKey: 'apiKey',
};
```

こちらに注目します。

```js
apiKey: 'apiKey',
```

`'apiKey'` のところのシングルクオーテーションの中を、今回メモしてある ChatGPT API の API キーに書き換えます。

もし、ChatGPT API の API キーが `ABCDEFG` の場合は、両脇のシングルクオーテーションを
残して書き換えるので `'ABCDEFG'` になります。

![79454d3d75fd9c0628dffeb2547578a4](https://i.gyazo.com/79454d3d75fd9c0628dffeb2547578a4.png)

設定できたらコードを保存します。

![31eede8af66e81f55fced6d86b4d749f](https://i.gyazo.com/31eede8af66e81f55fced6d86b4d749f.png)

正しく入力されていれば channelSecret は文字数が少なく、channelAccessToken は文字数が多いものになります。

## 関数 URL を取得して動作確認

![d77d17fdd71d8cf2c7b0e3e0e6b1ded9](https://i.gyazo.com/d77d17fdd71d8cf2c7b0e3e0e6b1ded9.png)

関数 URL の取得ボタンをクリックします。default のキーの URL 値を確認します。

![18d333595f02ff206ecc40b124a6ba86](https://i.gyazo.com/18d333595f02ff206ecc40b124a6ba86.png)

こちらのコピーボタンをクリックします。この関数の URL がコピーされます。

![f7b2644ff70d1a73668af462c0222f83](https://i.gyazo.com/f7b2644ff70d1a73668af462c0222f83.png)

ブラウザで別タブを表示して URL をアドレスバーにペーストして Enter キーを押してアクセスしてみましょう。このような画面が表示されていれば、上手く動作しています！

## LINE Developers の設定

![8b4d67be0c5d4d5008b9e3b0722b2034](https://i.gyazo.com/8b4d67be0c5d4d5008b9e3b0722b2034.png)

LINE Developers にアクセスして、今回動かしたい LINE Bot の設定ページにアクセスして Messaging API 設定 のページに移動します。

![8e6c534186195512b410b3b938602003](https://i.gyazo.com/8e6c534186195512b410b3b938602003.png)

スクロールして Webhook 設定 を探します。 Webhook の利用がオンになっていることを確認しましょう。確認できたら編集ボタンをクリックします。

![c814481982f00d8ebb7658cd879607f2](https://i.gyazo.com/c814481982f00d8ebb7658cd879607f2.png)

Webhook URL が編集できるので、さきほど確認した今回の関数 URL をペーストして更新ボタンをクリックします。

これで LINE Bot の設定は完了です！