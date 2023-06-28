# トラブルシューティング

![11831fda9bf46e449dae5a98564c8a03](https://i.gyazo.com/11831fda9bf46e449dae5a98564c8a03.png)

このページは、このハンズオンでのトラブルシューティングをまとめたページです。

## Funsions のリアルタイムの実行結果を見たい

![d416e73bf2ba53db7f262b62fc10c52a](https://i.gyazo.com/d416e73bf2ba53db7f262b62fc10c52a.png)

各トリガーの左メニューにモニターからコード内で書いた console.log やエラーメッセージの確認ができます。

今回、LINE BOT につながっているトリガーに移動します。左メニューにモニターをクリックします。

![fc3bf0e79b4c28b931fd57e9f2543cce](https://i.gyazo.com/fc3bf0e79b4c28b931fd57e9f2543cce.png)

ログをクリックします。

![c1fd8d46c75017222c7a51e3eb0fad3e](https://i.gyazo.com/c1fd8d46c75017222c7a51e3eb0fad3e.png)

Application Insights に接続しています... となります。待ちます。

![330cd09bfe68264b6da4821e3d223075](https://i.gyazo.com/330cd09bfe68264b6da4821e3d223075.png)

接続されましたとなったら、リアルタイムに確かめられます。

![3cba545bb6935ae120b58cd89735bc63](https://i.gyazo.com/3cba545bb6935ae120b58cd89735bc63.png)

確かめた例です。

## コード保存後、確認時に少し間が必要な場合も

![c96b79030362e4951c6650fd18acf473](https://i.gyazo.com/c96b79030362e4951c6650fd18acf473.png)

コード保存後、確認時に少し反映が遅れるので、確認するまでに間が必要な場合もあります。たとえば、30 秒から 1 分くらい待ってためしてみましょう。

## ChatGPT API で設定できているのに 429 などのエラーが起きる

![36f44f4238722f1bcfc3a0e7f7dbd93d](https://i.gyazo.com/36f44f4238722f1bcfc3a0e7f7dbd93d.png)

- クレジットカードが未登録の場合
- 無料期間が切れてクレジットカード登録が必要な場合
- Usage limit で設定した値よりも越えてしまっている場合

などがあります。

（なにかあれば更新中）