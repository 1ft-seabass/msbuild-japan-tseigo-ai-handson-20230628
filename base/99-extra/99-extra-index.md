# エクストラ

ここはハンズオンのメインの流れが終わったあとに、時間に余裕があればお伝えするエクストラページです。

もちろん、ハンズオン後にさらに試してみるのも楽しいので、ぜひやってみてくださいー。

## system パラメータで事前に役割定義をしてキャラクターづけをしてみよう

[ChatGPT の LINE BOT の仕組み](../08-line-bot-add-chatgpt.md) のソースコードでは openai.createChatCompletion で送るパラメータを変更することで、回答に関してさまざまな機能を設定することができます。

Create chat completion
https://platform.openai.com/docs/api-reference/chat/create

詳しい説明は公式ドキュメントのこちらにあります。

![8918b96ab93f132c5cd05d701870716d](https://i.gyazo.com/8918b96ab93f132c5cd05d701870716d.png)

ということで、今回はこの中で system という値を使ってみます。

https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb

こちらには、

> Typically, a conversation will start with a system message that tells the assistant how to behave, followed by alternating user and assistant messages, but you are not required to follow this format.
> 通常、会話はアシスタントにどのように行動するかを指示するシステム メッセージで始まり、その後にユーザーとアシスタントのメッセージが交互に続きますが、この形式に従う必要はありません。

という説明があり、事前に役割定義できるので、キャラクターづけをしてみましょう。

### 変更する箇所を確認

```js
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
```

もともとのソースコードです。 `messages.role` のところに `{role: "system", content: "キャラクター付け"}` のように、はじめに追加していきます。

### ちょっと元気に

ちょっと元気よく、「あなたは相手の質問に対して元気よく回答するボットです。よろしくお願いします！」というキャラ付けをしてみます。

![2d2af49680d34afc614c00cb01489494](https://i.gyazo.com/2d2af49680d34afc614c00cb01489494.png)

Functions のエディタで変更してみましょう。

```js
            // ChatGPT API に質問する
            let responseChatGPT;
            try {
                responseChatGPT = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {role: "system", content: "あなたは相手の質問に対して元気よく回答するボットです。よろしくお願いします！"},
                        {role: "user", content: currentMesssage}
                    ],
                });
                context.log(responseChatGPT.data.choices[0].message);
            } catch(e){
                context.log(e);
            }
```

こう変更します。

`messages.role` のところに `{role: "system", content: "あなたは相手の質問に対して元気よく回答するボットです。よろしくお願いします！"}` を加えました。

![42e05f4408d92b570878f62937afbaeb](https://i.gyazo.com/42e05f4408d92b570878f62937afbaeb.png)

変更できたら、保存して LINE BOT でやり取りしてみましょう。

![0a8942b1f4c8ec4e4ff34bff0ffa2490](https://i.gyazo.com/0a8942b1f4c8ec4e4ff34bff0ffa2490.jpg)

このように、結構元気なキャラクターになります。

### わんちゃん 🐶🐺 風

```js
            // ChatGPT API に質問する
            let responseChatGPT;
            try {
                responseChatGPT = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {role: "system", content: "あなたは、相手に忠実なゴールデンレトリバーですが、なんと人間の言葉を理解して、犬語で「わんわん！」と返答できます。"},
                        {role: "user", content: currentMesssage}
                    ],
                });
                context.log(responseChatGPT.data.choices[0].message);
            } catch(e){
                context.log(e);
            }
```

こう変更します。

`messages.role` のところに `{role: "system", content: "あなたは、相手に忠実なゴールデンレトリバーですが、なんと人間の言葉を理解して、犬語で「わんわん！」と返答できます。"}` を設定しました。

![ec2f1d4d0012d814d681bd04ca0ae352](https://i.gyazo.com/ec2f1d4d0012d814d681bd04ca0ae352.jpg)

このように、わんちゃん 🐶🐺 風キャラクターになります。

![bd0108534a8757b6a943ad994298177b](https://i.gyazo.com/bd0108534a8757b6a943ad994298177b.jpg)

犬種は？って聞くと、こんな風に答えてくれます。

### めちゃくちゃ日本の歴史に造詣の深い説明上手な学者さん

```js
            // ChatGPT API に質問する
            let responseChatGPT;
            try {
                responseChatGPT = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {role: "system", content: "あなたは、めちゃくちゃ日本の歴史に造詣の深い説明上手な学者です。質問の中で、なにか日本の歴史に関係のありそうなキーワードが会話にあれば、いい感じに相手にわかりやすく説明してください。"},
                        {role: "user", content: currentMesssage}
                    ],
                });
                context.log(responseChatGPT.data.choices[0].message);
            } catch(e){
                context.log(e);
            }
```

こう変更します。

`messages.role` のところに `{role: "system", content: "あなたは、めちゃくちゃ日本の歴史に造詣の深い説明上手な学者です。質問の中で、なにか日本の歴史に関係のありそうなキーワードが会話にあれば、いい感じに相手にわかりやすく説明してください。"}` を設定しました。

![ad912548cb7335c67ae426e3aa7aa754](https://i.gyazo.com/ad912548cb7335c67ae426e3aa7aa754.jpg)

このように、ちょっと解説を入れてくれる学者さんになりました。

## より突っ込んだ TIPS

![430a59940d2c08b029b85682f66c667b](https://i.gyazo.com/430a59940d2c08b029b85682f66c667b.jpg)

田中の研究してるネタより、いくつかご紹介します。質問の作り方に触れたものも多いので、参考になると思います。

- <a href="https://www.1ft-seabass.jp/memo/2023/03/13/chatgpt-http-api-like-json-response-tips1/" target="_blank">いい感じのエアコン設定温度を JSON データで返答し HTTP API 的に ChatGPT が答えてくれる質問例のメモ – 1ft-seabass.jp.MEMO</a>
  - JSON データで返答するような仕組みも作ることができ、他の仕組みともつながりやすくなります。
- <a href="https://www.1ft-seabass.jp/memo/2023/03/17/chatgpt-http-api-like-json-response-tips-with-node-red/" target="_blank">LED への RGB 値を JSON データで返答する ChatGPT API の仕組みを Node-RED でブラッシュアップしたメモ – 1ft-seabass.jp.MEMO</a>
  - 実際にライト（LED）点灯のような動作をさせたくて質問をブラッシュアップした話です。ちゃんとこれで IoT のコントロールができました。 
- <a href="https://www.1ft-seabass.jp/memo/2023/05/04/chatgpt-understand-json-data-tips/" target="_blank">OpenAI ChatGPT で JSON データを見せて褒めてもらったメモ – 1ft-seabass.jp.MEMO</a>
  - そして JSON のデータを読んでくれて褒めてくれちゃったりします。なんか個人の日常データを褒めてくれたら楽しいですよね。
- <a href="https://www.1ft-seabass.jp/memo/2023/06/19/chatgpt-http-api-like-json-response-tips-with-node-red-using-function-calling/" target="_blank">Node-RED で色名を聞くと RGB 値を JSON データで返答する ChatGPT API の仕組みを新機能 Function calling を導入したメモ – 1ft-seabass.jp.MEMO</a>
  - そして、いままで JSON データで受け取るのは結構苦労していたのですが、この新機能 Function calling で、そのあたりが、最近強化されまして、今後も楽しみです！