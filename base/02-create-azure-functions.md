# Azure Functions の作成

## 関数の作成開始

![ef684a5b0532318a0a1e0379c70ec61a](https://i.gyazo.com/ef684a5b0532318a0a1e0379c70ec61a.png)

Azure アカウントを使用して Azure Portal https://portal.azure.com/ にサインインします。

![ffadd594958b662230275c9ff562bcce](https://i.gyazo.com/ffadd594958b662230275c9ff562bcce.png)

左のメニューより、ホーム https://portal.azure.com/#home に移動します。

![92da0ca59d2547869d9f997beddf3439](https://i.gyazo.com/92da0ca59d2547869d9f997beddf3439.png)

リソースの作成をクリックします。

![18809e2576d3c0d5bc233e3d849ba379](https://i.gyazo.com/18809e2576d3c0d5bc233e3d849ba379.png)

「関数」を検索フィールドに入力して Enter キーを押して検索します。

![085fe05d8781a17d020280da2d98641b](https://i.gyazo.com/085fe05d8781a17d020280da2d98641b.png)

「関数アプリ」が出てきます。

![8ef3333fc7c7236818da2ce59212967e](https://i.gyazo.com/8ef3333fc7c7236818da2ce59212967e.png)

「関数アプリ」の作成ボタンをクリックすると、さらに「関数アプリ」というボタンが出てくるのでクリックします。

## 関数アプリの設定

![a0e673bbaa78b0388b73f545dd12d21f](https://i.gyazo.com/a0e673bbaa78b0388b73f545dd12d21f.png)

関数アプリの作成画面です。

- サブスクリプション
  - お使いのサブスクリプションを選択
- リソースグループ
  - 新規作成をクリックして handson-functions-chatgpt-linebot と名前を入力して OK をクリックしてリソースグループを作成します
- 関数アプリ名
  - 事前に半角英数字で自分の名前を決めておきます。私の場合は tseigo にしました。
  - `handson-202306-<半角英数字の自分の名前>-linebot-chatgpt` とします。
- コードまたはコンテナー イメージをデプロイしますか?
  - コード
- ランタイムスタック
  - Node.js
- バージョン
  - 18 LTS
- 地域
  - Japan East
- オペレーティング システム
  - Windows
- ホスティング オプションとプラン
  - 消費量 (サーバーレス)

設定できたら、確認および作成ボタンをクリックします。

![3d61fd8a9b0210ae78f642b2b37614e9](https://i.gyazo.com/3d61fd8a9b0210ae78f642b2b37614e9.png)

作成ボタンを選択します。 

![cbc77018caea0a006236e1d0ef09eca4](https://i.gyazo.com/cbc77018caea0a006236e1d0ef09eca4.png)

デプロイがはじめります。デプロイには 1 ～ 3 分かかりますので待ちましょう。

![2d1aa3876867405c079a62c6b2b1e43f](https://i.gyazo.com/2d1aa3876867405c079a62c6b2b1e43f.png)

デプロイが完了しました。

## Azure 関数アプリの確認

![2d1aa3876867405c079a62c6b2b1e43f](https://i.gyazo.com/2d1aa3876867405c079a62c6b2b1e43f.png)

デプロイが完了したら、リソースに移動ボタンをクリックします。

![41121be1e02159d5128c92fd5dd1c1b5](https://i.gyazo.com/41121be1e02159d5128c92fd5dd1c1b5.png)

リソースを確認します。

![bf6e49af3b6d5eb714b165cd01bca08a](https://i.gyazo.com/bf6e49af3b6d5eb714b165cd01bca08a.png)

URL をクリックして今回作成した Functions が動いていることも確認しましょう。

![367fa4fe388525143e2cc65c1698ee74](https://i.gyazo.com/367fa4fe388525143e2cc65c1698ee74.jpg)

このような画面が確認できるはずです。

📝参考資料
- Azure Functions を使用したサーバーレス ロジックの作成 - Training | Microsoft Learn
  - https://learn.microsoft.com/ja-jp/training/modules/create-serverless-logic-with-azure-functions/

## HTTP トリガーをつくっていきましょう！

![5fd4ddf3339a0b0da492aaac3956e5a9](https://i.gyazo.com/5fd4ddf3339a0b0da492aaac3956e5a9.png)
