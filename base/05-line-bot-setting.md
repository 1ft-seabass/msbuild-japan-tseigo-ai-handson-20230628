# LINE Bot に設定を反映

![3090f8720206e665a1066d347a87e7d8](https://i.gyazo.com/3090f8720206e665a1066d347a87e7d8.png)

左メニューから「関数」をクリックして、関数の一覧が表示されるので、さきほど作成した HttpTrigger1 をクリックします。

![d7204f976ab82a62a8b2fded5069c77b](https://i.gyazo.com/d7204f976ab82a62a8b2fded5069c77b.png)

コードとテストをクリックします。

![17ac6ce60f75b9d7733257cfb12368e8](https://i.gyazo.com/17ac6ce60f75b9d7733257cfb12368e8.png)

コードエディタのコードをすべて選択して以下のコードで上書きします。

```js
const line = require('@line/bot-sdk');

const config = {
    channelAccessToken: 'channelAccessToken',
    channelSecret:  'channelSecret',
};

const client = new line.Client(config);

module.exports = async function (context, req) {
    context.log('LINE Bot start...');
    if (req.query.message || (req.body && req.body.events)) {
        if (req.body && req.body.events[0]) {
            const message = {
                type: "text",
                text: req.body.events[0].message.text
            }
            context.log(message);
            if (req.body.events[0].replyToken) {
                client.replyMessage(
                    req.body.events[0].replyToken,
                    message
                );
            }
        } else {
            context.res = {
                status: 200,
                body: req.query.message
            };
        }
    }
    else {
        context.res = {
            status: 200,
            body: "Hello! LINE Bot + Azure Functions!"
        };
    };
};
```

上書きできたら、LINE Bot の設定を反映します。

```js
const config = {
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

![bcad6ed750b219a54afe8b6391221519](https://i.gyazo.com/bcad6ed750b219a54afe8b6391221519.png)

設定できたらコードを保存します。

📝参考資料
- Azure FunctionsでLINE Bot作成 - Qiita
  - https://qiita.com/RyogaTakao/items/a86522d560178f83652c


## 関数 URL を取得して動作確認

![d77d17fdd71d8cf2c7b0e3e0e6b1ded9](https://i.gyazo.com/d77d17fdd71d8cf2c7b0e3e0e6b1ded9.png)

関数 URL の取得ボタンをクリックします。default のキーの URL 値を確認します。

![18d333595f02ff206ecc40b124a6ba86](https://i.gyazo.com/18d333595f02ff206ecc40b124a6ba86.png)

こちらのコピーボタンをクリックします。この関数の URL がコピーされます。

![f3c959956ce0553918d905f998c03478](https://i.gyazo.com/f3c959956ce0553918d905f998c03478.png)

ブラウザで別タブを表示して URL をアドレスバーにペーストして Enter キーを押してアクセスしてみましょう。このような画面が表示されていれば、上手く動作しています！

## LINE Developers の設定

![8b4d67be0c5d4d5008b9e3b0722b2034](https://i.gyazo.com/8b4d67be0c5d4d5008b9e3b0722b2034.png)

LINE Developers にアクセスして、今回動かしたい LINE Bot の設定ページにアクセスして Messaging API 設定 のページに移動します。

![8e6c534186195512b410b3b938602003](https://i.gyazo.com/8e6c534186195512b410b3b938602003.png)

スクロールして Webhook 設定 を探します。 Webhook の利用がオンになっていることを確認しましょう。確認できたら編集ボタンをクリックします。

![f6e00659e0e5ad7f6ed1abbba9d89c8a](https://i.gyazo.com/f6e00659e0e5ad7f6ed1abbba9d89c8a.png)

Webhook URL が編集できるので、さきほど確認した今回の関数 URL をペーストして更新ボタンをクリックします。

これで LINE Bot の設定は完了です！