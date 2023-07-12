# あとかたづけ

ハンズオンが終わったら、あとかたづけをしましょう。

Azure Functions ・ LINE Bot ・ ChatGPT はそれぞれ使った分だけ課金される「従量課金」ですので、このまま使わなければお金はかかりませんが、以下は、より確実にあとかたづけをする方法です。

## Azure Functions の削除

![de9795bfe1f6c74979ba924c6e7a5f4c](https://i.gyazo.com/de9795bfe1f6c74979ba924c6e7a5f4c.png)

今回作成した Azure Function の概要ページを左メニューから選んで概要ページが表示されたら、上部のメニューから削除ボタンをクリックします。

画面が小さいとメニューが省略されている場合があるので ・・・ ボタンをクリックして隠れた削除ボタンを探しましょう。

![9a3b174627159ede249bd2e7fbf2eeb0](https://i.gyazo.com/9a3b174627159ede249bd2e7fbf2eeb0.png)

クリックすると削除ウィンドウがでてくるので、アプリ名を入れます。

![fa37fb387e7a4345ee83b5de92184217](https://i.gyazo.com/fa37fb387e7a4345ee83b5de92184217.png)

正しくアプリ名を入れたら削除できるので削除ボタンをクリックします。しばらく待つと削除されます。

念のため、すべてのリソース一覧などでしっかり消えたか確認しておきましょう。

## ChatGPT の API キーの削除

View API key ページ https://platform.openai.com/account/api-keys にアクセスします。

![3165179b4f12d94b7e9b068d6e181a27](https://i.gyazo.com/3165179b4f12d94b7e9b068d6e181a27.png)

キーの一覧から、今回使った API キーの列のゴミ箱ボタンをクリックします。

![c8d14b8fcb87687784acf0dc2bb4eb95](https://i.gyazo.com/c8d14b8fcb87687784acf0dc2bb4eb95.png)

Revoke secret key ウィンドウで、今回のキーを削除してよければ Revoke key ボタンをクリックします。

これで削除完了です。さきほどのキーの一覧から今回のキーが消えたか確認しましょう。

## LINE Bot

前述の Azure Functions や ChatGPT の API キーの削除が終わっていれば、基本的に動作することはありませんが、どうしても削除したい場合は、

![37f2f7a635b67f6f21aa8d6f08f7ba85](https://i.gyazo.com/37f2f7a635b67f6f21aa8d6f08f7ba85.png)

https://developers.line.biz/ja/docs/messaging-api/stop-using-line-official-account/

こちらの記事を参考に、チャネルの削除を行えば、LINE Bot が削除できます。