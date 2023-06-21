# はじめに

![006f7b52f5bd860c643bcad06095ddcb](https://i.gyazo.com/006f7b52f5bd860c643bcad06095ddcb.jpg)

今回は、人間の投げかけた様々な質問に対して答えてくれる OpenAI 社の ChatGPT API の仕組みを、みなさんの LINE の LINE BOT に組み込んで、この画像のようにいつでも自分の手元で質問ができるものをつくってみます。

おおまかには以下のような仕組みです。

![2b9c482dc632eed6be1cbdf9b3af652d](https://i.gyazo.com/2b9c482dc632eed6be1cbdf9b3af652d.png)

- LINE Messaging API で LINE BOT からのメッセージを Azure Functions でつくられたメッセージサーバにつなぎます
- Azure Functions は LINE から受け付けたメッセージを ChatGPT API へ質問として転送して聞きに行きます
- ChatGPT API は内容に応じて回答してくれるので Azure Functions でつくられたメッセージサーバが ChatGPT API の回答を LINE Messaging API 経由で LINE BOT に返答します。

## Azure Functions とは

![2c7119a8e4c2adde838e16e373a321d7](https://i.gyazo.com/2c7119a8e4c2adde838e16e373a321d7.jpg)

https://azure.microsoft.com/ja-jp/products/functions

> サーバーレス アプリケーション開発の迅速化と簡素化
> 
> 複雑なオーケストレーションの問題解決に役立つイベントドリブン型のサーバーレス コンピューティング プラットフォームを使用して、開発を効率化しましょう。Azure Functions のエンドツーエンドの開発エクスペリエンスにより、使い慣れた言語を使用できます。追加のセットアップを必要としないローカルでのビルドとデバッグ、クラウドでの大規模なデプロイと運用、トリガーとバインドを使用したサービスの統合が可能です。

![e8e89ef4793907b9006912acfc403776](https://i.gyazo.com/e8e89ef4793907b9006912acfc403776.png)

- インフラストラクチャ管理から解放される、柔軟な自動スケーリング
- イベントへの応答や、他のサービスへのシームレスな接続に対応した統合プログラミング モデル
- 統合ツールと組み込みの DevOps 機能を備えた、エンドツーエンドの開発エクスペリエンス
- 多様な プログラミング言語 および各シナリオに適したホスティング オプション

## OpenAI 社の ChatGPT API とは

![d7aa56ddf80436006420ecda37ea5514](https://i.gyazo.com/d7aa56ddf80436006420ecda37ea5514.png)

Wikipedia https://ja.wikipedia.org/wiki/OpenAI より

ChatGPT は、人工知能によって自然な会話ができる AI チャットサービスです。ユーザーが入力した質問に対して、まるで人間のように自然な対話形式で AI が答えます。

マルバツゲームの相手をしたり、Linux システムをエミュレートすることができたり、プログラミングやデバッグが行うことができます。また、音楽、小説、脚本、詩、歌詞や作文などの創作活動もできます 

今回は「会話形式で質問に答えてくれる」役割を LINE BOT とつなぎこんでみます。

## 事前準備ができているとこんな状態

![fcfa8391b44daeea26da946167189489](https://i.gyazo.com/fcfa8391b44daeea26da946167189489.png)

LINE BOT と LINE Messaging API が設定できていて、Azure や ChatGPT API の準備ができています。これから、それぞれをつなげていきます。

## それでははじめて行きましょう！

![5fd4ddf3339a0b0da492aaac3956e5a9](https://i.gyazo.com/5fd4ddf3339a0b0da492aaac3956e5a9.png)

