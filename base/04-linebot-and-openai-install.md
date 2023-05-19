# 必要ライブラリのインストール

LINE Bot や OpenAI の ChatGPT API を使うためのライブラリをインストールします。

![10c68a7da390ab7374a903908a2e61ad](https://i.gyazo.com/10c68a7da390ab7374a903908a2e61ad.png)

関数アプリの設定画面に戻っています。

![a962db0206cc97c74e29251a900f3c08](https://i.gyazo.com/a962db0206cc97c74e29251a900f3c08.png)

左メニューからコンソールを探します。探したらクリックします。

![00fbed0d1e04f3d44aef493d9ed7f7e4](https://i.gyazo.com/00fbed0d1e04f3d44aef493d9ed7f7e4.png)

この関数アプリ全体の設定ができるコンソールが起動します。

## ライブラリのインストール

```
npm init
```

コンソールでこちらのコマンドを入力して Enter キーをクリックします。これで npm パッケージマネージャの初期設定を行います。

![e0a5b0caaca6b76cd8d1ee8ab3fac892](https://i.gyazo.com/e0a5b0caaca6b76cd8d1ee8ab3fac892.png)

なにもエラーが出ず入力待ちになれば成功です。

```
npm install @line/bot-sdk openai axios
```

コンソールでこちらのコマンドを入力して Enter キーをクリックします。`@line/bot-sdk` ・ `openai` ・ `axios` の 3 つのライブラリをインストールします。

- `@line/bot-sdk`
  - LINE Bot を作るライブラリ
- `openai`
  - OpenAI 社の ChatGPT API を扱うライブラリ
- `axios`
  - 他の HTTP API につなぐライブラリ（念のためのインストール）

このような役割を見越してインストールしました。このインストールには 1 ～ 2 分かかるのでお待ちください。

![76e112df1ff77820236ac3582ac1d55a](https://i.gyazo.com/76e112df1ff77820236ac3582ac1d55a.png)

```text
added 56 packages, and audited 57 packages in 36s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

インストールが完了するとこのようなメッセージが出て、ライブラリのインストールが完了します。

