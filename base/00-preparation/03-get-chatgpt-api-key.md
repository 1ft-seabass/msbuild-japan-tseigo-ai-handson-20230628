
# OpenAI 社 ChatGPT API キーの取得

## API キーの取得

![59721bc470b73edf42fe34f4ae88a4e3](https://i.gyazo.com/59721bc470b73edf42fe34f4ae88a4e3.png)

ログインして API ページ https://platform.openai.com/ が表示した状態で、右上のユーザー名の書いてあるところをクリックしてユーザーメニューを出します。View API Keys をクリックします。

![95ab50ffd208cbf94b7dac63817a9552](https://i.gyazo.com/95ab50ffd208cbf94b7dac63817a9552.png)

API keys ページ https://platform.openai.com/account/api-keys に移動します。Create new secret key ボタンをクリックします。

![b547ba48e0b280cc1c7ad9f56aeeb7f8](https://i.gyazo.com/b547ba48e0b280cc1c7ad9f56aeeb7f8.png)

今後分かりやすくするためのキーの名前を決めれるので `Handson key` と入力して、Create secret key ボタンをクリックします。

![41e1468938164db104271c8c146083c8](https://i.gyazo.com/41e1468938164db104271c8c146083c8.png)

Create new secret key のウィンドウになり、キーが表示されます。このキーは **この画面一度切り** しか表示されないので、手元のテキストエディタにメモしておきましょう。

ちゃんとメモができたら Done ボタンをクリックします。

## 支払い情報の登録

この状態ですと、API キーは作られましたが、支払い情報がないために課金ができず指標することができません。

支払い情報の登録をしましょう。

![34caadfece28092285cc87d983d56cf8](https://i.gyazo.com/34caadfece28092285cc87d983d56cf8.png)

左メニューから Billing をクリックします。

![a79b300f4769e6d8daaaaa85d927ca2b](https://i.gyazo.com/a79b300f4769e6d8daaaaa85d927ca2b.png)

Billing overview という支払い情報のページが表示されます。

![6d7651d7a393f03773fd72baf1cbe594](https://i.gyazo.com/6d7651d7a393f03773fd72baf1cbe594.png)

Set up paid account ボタンをクリックします。Set up payment method が聞かれるので、今回のハンズオンでは個人利用なので I'm an indivisual をクリックします。

![658ce920bb6dcc1871eec194bf32473a](https://i.gyazo.com/658ce920bb6dcc1871eec194bf32473a.png)

クレジットカード情報を入力して Set up payment method ボタンをクリックして支払い情報の登録を完了します。

## 利用制限 Usage limits を設定

API の利用は使ったら使った分だけ課金される従量課金のため、小さめ金額で制限を設けておきます。

![335882d8f13f4ef022727ee8a7ae3ba4](https://i.gyazo.com/335882d8f13f4ef022727ee8a7ae3ba4.png)

Usage limits をクリックします。

![7f58eac4de0591a3a104183c57502776](https://i.gyazo.com/7f58eac4de0591a3a104183c57502776.png)

Hard limit は「毎月この使用量しきい値に達すると、それ以降のリクエストは拒否されます」。Soft limit は「毎月この使用量のしきい値に達すると、通知メールが送信されます」。ですので、使いすぎを即ブロックしたい場合は Hard limit が重要です。

私の場合は、余裕をもって Hard limit を $24 Soft limit は $12 に設定しましたが。皆さんの状況に合わせて設定しましょう。

これで、うっかりたくさん試して使いすぎになりそうなときでも安心です。

📝参考資料
- ChatGPT APIキー取得までの手順 - Qiita
  - https://qiita.com/kotattsu3/items/b936a65d173a5d39dad0