# ChatGPT 用 LINE Bot 用の HTTP トリガー作成

![88c5934bb1d8f3c955a48c27b99e30bd](https://i.gyazo.com/88c5934bb1d8f3c955a48c27b99e30bd.png)

いよいよ ChatGPT API との連携です。新しい ChatGPT 用 LINE Bot 用の HTTP トリガーをつくってつないでいきます。

ChatGPT 用 LINE Bot 用の HTTP トリガーを作成します。

![28e65ad227f43361c6aaca656c37ab24](https://i.gyazo.com/28e65ad227f43361c6aaca656c37ab24.png)

まだ HttpTrigger1 の画面の場合は、上部のナビゲーションで関数のところをクリックして関数全体の画面に戻ります。

![6aab0eb798d369c459a488681c2a7dca](https://i.gyazo.com/6aab0eb798d369c459a488681c2a7dca.png)

関数全体の画面に戻ったら、左メニューから「関数」をクリックして、関数を作る画面を表示します。作成ボタンをクリックします。

![8e6e943ab6091a496868da409084cec1](https://i.gyazo.com/8e6e943ab6091a496868da409084cec1.png)

関数の作成画面が表示されるので、

- 開発環境
  - ポータルでの開発
- テンプレート
  - HTTP trigger

を選択します。

![77f15eb557c91e16fb1aa933b834100d](https://i.gyazo.com/77f15eb557c91e16fb1aa933b834100d.png)

選択すると、下部にテンプレートの詳細が出てくるので、

- 新しい関数
  - HttpTriggerChatGPT
- Authorization level
  - Function そのまま

と設定して、作成ボタンをクリックします。作成には 1 ～ 2 分ほど時間がかかるので待ちましょう。

![bb55a59e287b34f7c7d093a620dd7c6b](https://i.gyazo.com/bb55a59e287b34f7c7d093a620dd7c6b.png)

HTTP トリガーが作成されました。

![611c3fa73ac0238b1fc2a5ef6a08e73f](https://i.gyazo.com/611c3fa73ac0238b1fc2a5ef6a08e73f.png)

左メニューから「コードとテスト」をクリックすると、ポータル上でコード編集やテストができる画面が表示されます。

こちらでソースコードの反映を行っていきます。

## 動作チェック

![d77d17fdd71d8cf2c7b0e3e0e6b1ded9](https://i.gyazo.com/d77d17fdd71d8cf2c7b0e3e0e6b1ded9.png)

関数 URL の取得ボタンをクリックします。default のキーの URL 値を確認します。

![18d333595f02ff206ecc40b124a6ba86](https://i.gyazo.com/18d333595f02ff206ecc40b124a6ba86.png)

こちらのコピーボタンをクリックします。この関数の URL がコピーされます。

![0b6b422e6e35da06470507f069f65f67](https://i.gyazo.com/0b6b422e6e35da06470507f069f65f67.png)

ブラウザで別タブを表示して URL をアドレスバーにペーストして Enter キーを押してアクセスしてみましょう。`This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.` という今回のソースコードのレスポンスが表示されます。
