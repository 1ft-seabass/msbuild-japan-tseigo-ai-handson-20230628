# LINE Bot 用の HTTP トリガー作成

LINE Bot の基礎として HTTP のレスポンスを返答する Functions の HTTP トリガーを作成します。

![a5d20c8c9aefed4ac6bf9222137f97fc](https://i.gyazo.com/a5d20c8c9aefed4ac6bf9222137f97fc.png)

左メニューから「関数」をクリックして、関数を作る画面を表示します。作成ボタンをクリックします。

![8e6e943ab6091a496868da409084cec1](https://i.gyazo.com/8e6e943ab6091a496868da409084cec1.png)

関数の作成画面が表示されるので、

- 開発環境
  - ポータルでの開発
- テンプレート
  - HTTP trigger

を選択して、作成ボタンをクリックします。作成には 1 ～ 2 分ほど時間がかかるので待ちましょう。

![5c1aea297b149048e0ce8ab818893dfc](https://i.gyazo.com/5c1aea297b149048e0ce8ab818893dfc.png)

HTTP トリガーが作成されました。

![1c78d968fd718706be3b4e7e1b5f5dc2](https://i.gyazo.com/1c78d968fd718706be3b4e7e1b5f5dc2.png)

左メニューから「コードとテスト」をクリックすると、ポータル上でコード編集やテストができる画面が表示されます。

こちらでソースコードの反映を行っていきます。

## 動作チェック

![d77d17fdd71d8cf2c7b0e3e0e6b1ded9](https://i.gyazo.com/d77d17fdd71d8cf2c7b0e3e0e6b1ded9.png)

関数 URL の取得ボタンをクリックします。default のキーの URL 値を確認します。

![18d333595f02ff206ecc40b124a6ba86](https://i.gyazo.com/18d333595f02ff206ecc40b124a6ba86.png)

こちらのコピーボタンをクリックします。この関数の URL がコピーされます。

![27c3397a6ac0b76de20dfd01aa72e0b8](https://i.gyazo.com/27c3397a6ac0b76de20dfd01aa72e0b8.png)

ブラウザで別タブを表示して URL をアドレスバーにペーストして Enter キーを押してアクセスしてみましょう。`This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.` という今回のソースコードのレスポンスが表示されます。

```js
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
```

実際にはこちらの動作しているソースコードの `responseMessage` のあたりです。

これで動作確認もできました。

![eaf7cb01b60b6dd936dbcba6c6aad6f2](https://i.gyazo.com/eaf7cb01b60b6dd936dbcba6c6aad6f2.png)

一旦、HTTP トリガーの詳細画面から右上の × ボタンをクリックして、関数アプリの設定画面に戻ります。

![10c68a7da390ab7374a903908a2e61ad](https://i.gyazo.com/10c68a7da390ab7374a903908a2e61ad.png)

関数アプリの設定画面に戻りました。